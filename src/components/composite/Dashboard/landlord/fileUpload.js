import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import theme from "../../../../theme";

const CustomDropdown = ({ data, selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <View style={styles.dropdownHeader}>
          <Text>{selectedValue || "Select..."}</Text>
        </View>
      </TouchableOpacity>
      {isOpen && (
        <ScrollView style={styles.dropdownList}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                onSelect(item);
                setIsOpen(false);
              }}
            >
              <Text style={styles.dropdownItem}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const UploadFileModal = ({ isVisible, onClose, files, handleFileUpload }) => {
  const [chosenFileName, setChosenFileName] = useState("");
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.type === "success") {
        setChosenFileName(result.name);
      }
    } catch (err) {
      console.error("Error picking document: ", err);
    }
  };

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalHeader}>Upload File</Text>

        <Button title="Choose File" onPress={pickDocument} />
        {chosenFileName && (
          <Text style={styles.chosenFileName}>Selected: {chosenFileName}</Text>
        )}

        <CustomDropdown
          data={files.map((fileGroup) => fileGroup.tenant)}
          selectedValue={selectedTenant}
          onSelect={(value) => setSelectedTenant(value)}
        />

        <CustomDropdown
          data={files.map((fileGroup) => fileGroup.property)}
          selectedValue={selectedProperty}
          onSelect={(value) => setSelectedProperty(value)}
        />

        <TextInput
          value={chosenFileName}
          onChangeText={setChosenFileName}
          placeholder="Name your file..."
          style={styles.searchInput}
        />

        <Button title="Upload" onPress={handleFileUpload} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  modalHeader: {
    ...theme.typography.header,
    marginBottom: 30,
  },
  chosenFileName: {
    marginTop: 15,
    marginBottom: 20,
    fontStyle: "italic",
  },
  searchInput: {
    width: "80%",
    padding: theme.spacing.small,
    marginBottom: 15,
    backgroundColor: theme.colors.grey.light,
    borderRadius: theme.borderRadius.small,
  },
  dropdownContainer: {
    width: "80%",
    maxHeight: 200,
    marginBottom: 15,
  },
  dropdownHeader: {
    width: "100%",
    padding: 10,
    backgroundColor: theme.colors.grey.light,
    borderRadius: theme.borderRadius.small,
    borderWidth: 1,
    borderColor: theme.colors.grey.lighter,
  },
  dropdownList: {
    marginTop: 10,
    backgroundColor: theme.colors.grey.lighter,
    borderRadius: theme.borderRadius.small,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.grey,
  },
});

export default UploadFileModal;
