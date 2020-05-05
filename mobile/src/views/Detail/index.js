import React from "react";
import { Feather } from "@expo/vector-icons";
import * as MailComposer from "expo-mail-composer";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

export default function Detail() {
  const navigation = useNavigation();
  const message =
    "Olá Centro de Zoonoses do Cariri, estuou entrando em contato, para poder contrbuir com o caso da cadilina atropelada";

  function navigateBack() {
    navigation.goBack();
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=5588988292832&text=${message}`);
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: "Herói do caso: Cadelinha atropelada",
      recipients: ["rafaelbatis.sth@gmail.com"],
      body: message,
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Image source={logoImg} />
          <TouchableOpacity onPress={navigateBack}>
            <Feather name="arrow-left" size={30} color="#5844ed" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>Centro de zoonoses</Text>

        <Text style={styles.incidentProperty}>CASO!</Text>
        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

        <Text style={styles.incidentProperty}>Valor R$</Text>
        <Text style={styles.incidentValue}>140,00</Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia</Text>
        <Text style={styles.heroDescriptions}>Seja o herói desse caso.</Text>
        <Text style={styles.contact}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
