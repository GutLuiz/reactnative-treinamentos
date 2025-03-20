import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Para usar ícones

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState(false);

    const toggleSelection = () => {
        setSelected(!selected);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.openButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.openButtonText}>Abrir Modal</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Escolha um relatório</Text>
                        <TouchableOpacity
                            style={[styles.selectionBox, selected && { borderColor: '#28a745' }]}
                            onPress={toggleSelection}
                        >

                            <FontAwesome name="shopping-cart" size={24} color="#6c757d" />
                            <Text style={[styles.selectionText, selected && { fontWeight: 'bold' }]}> Vendas</Text>
                            <View style={styles.circle}>
                                {selected && <View style={styles.selectedCircle} />}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >

                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    openButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    openButtonText: {
        color: 'white',
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    selectionBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
        borderWidth: 2,
        borderColor: '#6c757d',
        padding: 20,
        borderRadius: 5,
    },
    selectionText: {
        marginLeft: 10,
        fontSize: 16,
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#6c757d',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    selectedCircle: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#28a745',
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#FF8C00',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});
