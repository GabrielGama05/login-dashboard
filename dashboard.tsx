import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles as s } from '../styles';

export default function Dashboard() {
  const { nome } = useLocalSearchParams<{ nome?: string | string[] }>();
  const usuario = (Array.isArray(nome) ? nome[0] : nome) || 'visitante';
  return <SafeAreaView style={s.screen}>
    <ScrollView contentContainerStyle={s.container}>
      <View style={s.brand}><Text style={s.logo}>E</Text><Text style={s.brandName}>Expo • meu espaço</Text></View>
      <View style={s.card}>
        <Text style={s.eyebrow}>DASHBOARD</Text>
        <Text style={s.title}>Bem-vindo!</Text>
        <Text style={s.user}>Olá, {usuario}.</Text>
        <Text style={s.description}>Você está no Dashboard da aplicação.</Text>
        <View style={s.infoCard}><Text style={s.infoIcon}>✦</Text><Text style={s.infoTitle}>Aplicação Expo</Text><Text style={s.description}>Um novo espaço para aprender, criar e dar o próximo passo.</Text></View>
        <View style={s.detail}><Text style={s.detailLabel}>TECNOLOGIAS</Text><Text style={s.detailValue}>Expo · React Native · TypeScript</Text></View>
        <View style={s.detail}><Text style={s.detailLabel}>NAVEGAÇÃO</Text><Text style={s.detailValue}>Expo Router</Text></View>
        <Pressable accessibilityRole="button" onPress={() => router.replace('/')} style={({ pressed }) => [s.button, pressed && s.pressed]}><Text style={s.buttonText}>Voltar ao Login</Text></Pressable>
      </View>
      <Text style={s.footer}>APRENDER É O PRIMEIRO PASSO.</Text>
    </ScrollView>
  </SafeAreaView>;
}
