import { useState } from 'react';
import { router } from 'expo-router';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles as s } from '../styles';

export default function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  function acessar() {
    if (!login.trim() || !senha.trim()) { setErro('Preencha o login e a senha para continuar.'); return; }
    setErro(''); setSenha('');
    router.push({ pathname: '/dashboard', params: { nome: login.trim() } });
  }
  return <SafeAreaView style={s.screen}>
    <KeyboardAvoidingView style={s.flex} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={s.container} keyboardShouldPersistTaps="handled">
        <View style={s.brand}><Text style={s.logo}>E</Text><Text style={s.brandName}>Expo • meu espaço</Text></View>
        <View style={s.card}>
          <Text style={s.eyebrow}>BEM-VINDO DE VOLTA</Text>
          <Text style={s.title}>Seu próximo passo{'\n'}começa aqui.</Text>
          <Text style={s.description}>Entre para acessar seu Dashboard.</Text>
          <Text style={s.label}>Login</Text>
          <TextInput accessibilityLabel="Login" style={s.input} placeholder="Digite seu login" placeholderTextColor="#7b8798" value={login} onChangeText={setLogin} autoCapitalize="none" autoCorrect={false} autoComplete="username" maxLength={80} />
          <Text style={s.label}>Senha</Text>
          <TextInput accessibilityLabel="Senha" style={s.input} placeholder="Digite sua senha" placeholderTextColor="#7b8798" value={senha} onChangeText={setSenha} secureTextEntry autoCapitalize="none" autoComplete="current-password" returnKeyType="go" onSubmitEditing={acessar} />
          {erro ? <Text accessibilityRole="alert" style={s.error}>{erro}</Text> : null}
          <Pressable accessibilityRole="button" onPress={acessar} style={({ pressed }) => [s.button, pressed && s.pressed]}><Text style={s.buttonText}>Acessar</Text></Pressable>
          <Text style={s.note}>Projeto de estudo • use qualquer login e senha.</Text>
        </View>
        <Text style={s.footer}>APLICAÇÃO EXPO / REACT NATIVE</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>;
}
