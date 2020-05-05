import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

export default function incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        style={styles.incidentsLint}
        data={[1, 2, 3]}
        keyExtractor={(incidents) => String(incidents)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incidents}>
            <Text style={styles.incidentsProperty}>ONG:</Text>
            <Text style={styles.incidentsValue}>Centro de zoonoses</Text>

            <Text style={styles.incidentsProperty}>CASO!</Text>
            <Text style={styles.incidentsValue}>Cadelinha atropelada</Text>

            <Text style={styles.incidentsProperty}>Valor R$</Text>
            <Text style={styles.incidentsValue}>140,00</Text>

            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather
                style={styles.incidentsArrowRight}
                name="arrow-right"
                size={16}
                color="#5844ed"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
