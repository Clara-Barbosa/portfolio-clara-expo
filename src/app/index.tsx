import { router } from "expo-router";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Home() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.logo}>
        <Text style={styles.logoText}>MC</Text>
      </View>

      <View style={styles.status}>
        <View style={styles.statusDot} />
        <Text style={styles.statusText}>
          Disponível para estágio
        </Text>
      </View>

      <Text style={styles.name}>
        Maria Clara{"\n"}
        <Text style={styles.highlight}>de Oliveira</Text>
      </Text>

      <Text style={styles.course}>
        Estudante de Ciência da Computação
      </Text>

      <Text style={styles.description}>
        Estudante de Ciência da Computação interessada em programação,
        desenvolvimento de software e tecnologia, buscando transformar
        conhecimento em soluções práticas e continuar evoluindo na área.
      </Text>

      <View style={styles.navigationSection}>
        <Text style={styles.navigationLabel}>
          NAVEGAÇÃO
        </Text>

        <Text style={styles.navigationTitle}>
          Conheça meu{" "}
          <Text style={styles.highlight}>portfólio</Text>
        </Text>

        <View style={styles.menu}>
          <Pressable
            style={styles.primaryButton}
            onPress={() => router.push("/sobre")}
          >
            <View style={styles.buttonContent}>
              <View style={styles.buttonIconContainerPrimary}>
                <Text style={styles.buttonIcon}>👩‍💻</Text>
              </View>

              <View style={styles.buttonTextContainer}>
                <Text style={styles.primaryButtonText}>
                  Sobre Mim
                </Text>

                <Text style={styles.primaryButtonDescription}>
                  Perfil, conhecimentos e tecnologias
                </Text>
              </View>

              <Text style={styles.primaryArrow}>›</Text>
            </View>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() =>
              router.push("/experiencia-academica")
            }
          >
            <View style={styles.buttonContent}>
              <View style={styles.buttonIconContainer}>
                <Text style={styles.buttonIcon}>🎓</Text>
              </View>

              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>
                  Experiência Acadêmica
                </Text>

                <Text style={styles.buttonDescription}>
                  Formação e trajetória acadêmica
                </Text>
              </View>

              <Text style={styles.arrow}>›</Text>
            </View>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() =>
              router.push("/experiencia-profissional")
            }
          >
            <View style={styles.buttonContent}>
              <View style={styles.buttonIconContainer}>
                <Text style={styles.buttonIcon}>💼</Text>
              </View>

              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>
                  Experiência Profissional
                </Text>

                <Text style={styles.buttonDescription}>
                  Objetivos e competências profissionais
                </Text>
              </View>

              <Text style={styles.arrow}>›</Text>
            </View>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => router.push("/projetos")}
          >
            <View style={styles.buttonContent}>
              <View style={styles.buttonIconContainer}>
                <Text style={styles.buttonIcon}>💻</Text>
              </View>

              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>
                  Meus Projetos
                </Text>

                <Text style={styles.buttonDescription}>
                  Projetos acadêmicos e pessoais
                </Text>
              </View>

              <Text style={styles.arrow}>›</Text>
            </View>
          </Pressable>

          <Pressable
            style={styles.gameButton}
            onPress={() => router.push("/jogo")}
          >
            <View style={styles.buttonContent}>
              <View style={styles.gameIconContainer}>
                <Text style={styles.buttonIcon}>🎮</Text>
              </View>

              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>
                  Jogo da Forca
                </Text>

                <Text style={styles.buttonDescription}>
                  Jogue diretamente pelo aplicativo
                </Text>
              </View>

              <Text style={styles.arrow}>›</Text>
            </View>
          </Pressable>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>
          Portfólio Pessoal
        </Text>

        <Text style={styles.footerText}>
          React Native • Expo • Expo Router
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090611",
  },

  content: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },

  logo: {
    width: 55,
    height: 55,
    borderRadius: 16,
    backgroundColor: "#7c3aed",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35,
  },

  logoText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "900",
  },

  status: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#171126",
    borderWidth: 1,
    borderColor: "#2e2345",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 13,
    marginBottom: 22,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#a78bfa",
    marginRight: 8,
  },

  statusText: {
    color: "#ede9fe",
    fontSize: 13,
    fontWeight: "600",
  },

  name: {
    color: "#ffffff",
    fontSize: 40,
    lineHeight: 46,
    fontWeight: "900",
  },

  highlight: {
    color: "#a78bfa",
  },

  course: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "600",
    marginTop: 14,
  },

  description: {
    color: "#c4b5d4",
    fontSize: 16,
    lineHeight: 25,
    marginTop: 18,
  },

  navigationSection: {
    marginTop: 38,
  },

  navigationLabel: {
    color: "#a78bfa",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  navigationTitle: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 17,
  },

  menu: {
    gap: 12,
  },

  primaryButton: {
    backgroundColor: "#7c3aed",
    borderRadius: 17,
    padding: 15,
  },

  button: {
    backgroundColor: "#171126",
    borderWidth: 1,
    borderColor: "#4c3a69",
    borderRadius: 17,
    padding: 15,
  },

  gameButton: {
    backgroundColor: "#201436",
    borderWidth: 1,
    borderColor: "#5b3b82",
    borderRadius: 17,
    padding: 15,
  },

  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  buttonIconContainerPrimary: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  buttonIconContainer: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: "#26183d",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  gameIconContainer: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: "#321d50",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  buttonIcon: {
    fontSize: 20,
  },

  buttonTextContainer: {
    flex: 1,
  },

  primaryButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "800",
  },

  primaryButtonDescription: {
    color: "#ede9fe",
    fontSize: 12,
    marginTop: 3,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "800",
  },

  buttonDescription: {
    color: "#9f8db5",
    fontSize: 12,
    marginTop: 3,
  },

  primaryArrow: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "300",
    marginLeft: 8,
  },

  arrow: {
    color: "#a78bfa",
    fontSize: 28,
    fontWeight: "300",
    marginLeft: 8,
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: "#2e2345",
    marginTop: 45,
    paddingTop: 20,
  },

  footerTitle: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
  },

  footerText: {
    color: "#9f8db5",
    fontSize: 12,
    marginTop: 5,
  },
});