import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, TextInput } from 'react-native';

const Profile = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [salary, setSalary] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [position, setPosition] = useState("");

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/banner.png')} style={styles.imageBackground}>
                    <TouchableOpacity style={styles.backButton}>
                        <Image style={styles.logo} source={require('../../assets/Icon.png')} />
                    </TouchableOpacity>
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>Ice-cream Parlor</Text>
                        <Text style={styles.subHeaderText}>
                            Log in to access the administration area of the ice cream shop.
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.bottomContainer}>
                    <Image source={require('../../assets/foto_Perfil.png')} style={styles.profileImage} />
                    
                    <Text style={styles.infoText}>Information</Text>
                    
                    {/* Name and Surname */}
                    <View style={styles.rowContainer}>
                        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={n => setName(n)} />
                        <TextInput style={styles.input} placeholder="Surname" value={surname} onChangeText={n => setSurname(n)} />
                    </View>
                    
                    {/* Email and Password */}
                    <TextInput style={styles.fullWidthInput} placeholder="Email" value={email} onChangeText={n => setEmail(n)} />
                    <TextInput style={styles.fullWidthInput} placeholder="Password" value={password} onChangeText={n => setPassword(n)} secureTextEntry />

                    {/* Date and Phone */}
                    <View style={styles.rowContainer}>
                        <TextInput style={styles.input} placeholder="Date of Birth" value={date} onChangeText={n => setDate(n)} keyboardType="numeric" maxLength={10} />
                        <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={n => setPhone(n)} />
                    </View>

                    {/* Address and Salary */}
                    <View style={styles.rowContainer}>
                        <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={n => setAddress(n)} />
                        <TextInput style={styles.input} placeholder="Salary" value={salary} onChangeText={n => setSalary(n)} />
                    </View>

                  
                    <View style={styles.rowContainer}>
                        <TextInput style={styles.input} placeholder="City" value={city} onChangeText={n => setCity(n)} />
                        <TextInput style={styles.input} placeholder="State" value={state} onChangeText={n => setState(n)} />
                    </View>

                  
                    <View style={styles.rowContainer}>
                        <TextInput style={styles.input} placeholder="Zip" value={zip} onChangeText={n => setZip(n)} />
                        <TextInput style={styles.input} placeholder="Position" value={position} onChangeText={n => setPosition(n)} />
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: { flex: 1, backgroundColor: 'white' },
    container: { flex: 1 },
    imageBackground: { height: 200, justifyContent: 'center' },
    backButton: {  top: 40, left: 20, height: 32, width: 32 },
    logo: { width: '100%', height: '100%' },
    textContainer: { marginLeft: 20, marginTop: 40 },
    headerText: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
    subHeaderText: { fontSize: 14, color: '#f1f1f1', marginTop: 5 },
    bottomContainer: { padding: 20, borderRadius: 15, backgroundColor: '#fff' },
    profileImage: { width: 150, height: 150, borderRadius: 75, alignSelf: 'center',  },
    infoText: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, alignSelf: 'flex-start' },
    rowContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
    input: { width: '48%', borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 12, backgroundColor: 'white' },
    fullWidthInput: { width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 12, backgroundColor: 'white', marginBottom: 15 },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
    button: { width: '48%', backgroundColor: '#8a19d6', borderRadius: 10, padding: 15, alignItems: 'center' },
    buttonText: { color: '#fff', fontWeight: 'bold' }
});

export default Profile;
