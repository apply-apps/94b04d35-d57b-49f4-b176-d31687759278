// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';

// ProjectList component
const projects = [
    { id: '1', name: 'Project Alpha', description: 'Description of Project Alpha' },
    { id: '2', name: 'Project Beta', description: 'Description of Project Beta' },
    { id: '3', name: 'Project Gamma', description: 'Description of Project Gamma' },
];

const ProjectList = () => {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
    );

    return (
        <FlatList
            data={projects}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
        />
    );
};

// ClientList component
const clients = [
    { id: '1', name: 'Client A', contact: 'contact@clienta.com' },
    { id: '2', name: 'Client B', contact: 'contact@clientb.com' },
    { id: '3', name: 'Client C', contact: 'contact@clientc.com' },
];

const ClientList = () => {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.contact}</Text>
        </View>
    );

    return (
        <FlatList
            data={clients}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
        />
    );
};

// EmployeeList component
const employees = [
    { id: '1', name: 'Employee One', role: 'Developer' },
    { id: '2', name: 'Employee Two', role: 'Designer' },
    { id: '3', name: 'Employee Three', role: 'Project Manager' },
];

const EmployeeList = () => {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.role}</Text>
        </View>
    );

    return (
        <FlatList
            data={employees}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
        />
    );
};

// Main App component
export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Management Dashboard</Text>
                <ProjectList />
                <ClientList />
                <EmployeeList />
            </ScrollView>
        </SafeAreaView>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30, // Avoids overlapping with the status bar
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    list: {
        marginBottom: 20,
    },
    itemContainer: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        color: '#666',
    },
});