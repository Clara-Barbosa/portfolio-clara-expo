import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Sobre() {
  const tecnologiasApp = [
    "React Native",
    "Expo",
    "Expo Router",
    "TypeScript",
    "JavaScript",
    "React",
    "StyleSheet",
    "Hooks",
    "Git",
    "GitHub",
  ];

  const conhecimentos = [
    "Python",
    "C",
    "Java",
    "JavaScript",
    "React",
    "Next.js",
    "React Native",
    "SQL",
    "PostgreSQL",
    "Git",
    "GitHub",
    "Scrum",
    "Kanban",
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.label}>SOBRE MIM</Text>

      <Text style={styles.title}>
        Um Pouco{"\n"}
        <Text style={styles.highlight}>Sobre Mim</Text>
      </Text>

      <Text style={styles.paragraph}>
        Sou estudante de Ciência da Computação e tenho interesse em
        desenvolvimento de software, programação e tecnologia. Gosto de
        aprender novas ferramentas e transformar conhecimentos em soluções
        práticas.
      </Text>

      <Text style={styles.paragraph}>
        Ao longo da graduação, venho desenvolvendo projetos acadêmicos e
        ampliando meus conhecimentos em linguagens de programação,
        desenvolvimento web, banco de dados e metodologias ágeis.
      </Text>

      <Text style={styles.paragraph}>
        Atualmente, busco oportunidades que me permitam continuar evoluindo
        tecnicamente, adquirir experiência prática e contribuir em projetos
        reais na área de tecnologia.
      </Text>

      <View style={styles.infoGrid}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Text style={styles.cardIcon}>🎓</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardLabel}>FORMAÇÃO</Text>
            <Text style={styles.cardValue}>
              Ciência da Computação
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Text style={styles.cardIcon}>📍</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardLabel}>LOCALIZAÇÃO</Text>
            <Text style={styles.cardValue}>
              Recife, Pernambuco
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Text style={styles.cardIcon}>💼</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardLabel}>OBJETIVO</Text>
            <Text style={styles.cardValue}>
              Oportunidade na área de tecnologia
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Text style={styles.cardIcon}>🌐</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardLabel}>IDIOMAS</Text>
            <Text style={styles.cardValue}>
              Português • Inglês A1
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>
          DESENVOLVIMENTO DO APP
        </Text>

        <Text style={styles.sectionTitle}>
          Tecnologias e{" "}
          <Text style={styles.highlight}>módulos utilizados</Text>
        </Text>

        <Text style={styles.sectionDescription}>
          Este portfólio foi adaptado para uma aplicação mobile utilizando
          React Native e Expo. A navegação entre as diferentes telas do
          aplicativo é realizada com Expo Router.
        </Text>

        <View style={styles.techBox}>
          <View style={styles.techBoxHeader}>
            <Text style={styles.techBoxIcon}>{"</>"}</Text>

            <View style={styles.techBoxHeaderText}>
              <Text style={styles.techBoxTitle}>
                Tecnologias do aplicativo
              </Text>

              <Text style={styles.techBoxSubtitle}>
                Ferramentas utilizadas nesta versão mobile
              </Text>
            </View>
          </View>

          <View style={styles.tags}>
            {tecnologiasApp.map((tecnologia) => (
              <View
                style={styles.tag}
                key={tecnologia}
              >
                <Text style={styles.tagText}>
                  {tecnologia}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>
          CONHECIMENTOS
        </Text>

        <Text style={styles.sectionTitle}>
          Habilidades que venho{"\n"}
          <Text style={styles.highlight}>desenvolvendo</Text>
        </Text>

        <Text style={styles.sectionDescription}>
          Tecnologias, ferramentas e metodologias com as quais tive contato
          durante minha formação acadêmica e no desenvolvimento de projetos.
        </Text>

        <View style={styles.tags}>
          {conhecimentos.map((conhecimento) => (
            <View
              style={styles.knowledgeTag}
              key={conhecimento}
            >
              <Text style={styles.knowledgeTagText}>
                {conhecimento}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.finalCard}>
        <Text style={styles.finalIcon}>✦</Text>

        <View style={styles.finalContent}>
          <Text style={styles.finalTitle}>
            Aprendizado contínuo
          </Text>

          <Text style={styles.finalText}>
            Busco continuar ampliando meus conhecimentos e desenvolvendo
            novas habilidades ao longo da graduação em Ciência da Computação.
          </Text>
        </View>
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
    padding: 22,
    paddingTop: 35,
    paddingBottom: 55,
  },

  label: {
    color: "#a78bfa",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 12,
  },

  title: {
    color: "#ffffff",
    fontSize: 32,
    lineHeight: 39,
    fontWeight: "900",
    marginBottom: 20,
  },

  highlight: {
    color: "#a78bfa",
  },

  paragraph: {
    color: "#c4b5d4",
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 14,
  },

  infoGrid: {
    gap: 12,
    marginTop: 20,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#171126",
    borderWidth: 1,
    borderColor: "#35264d",
    borderRadius: 18,
    padding: 17,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#26183d",
    borderWidth: 1,
    borderColor: "#4c3570",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  cardIcon: {
    fontSize: 23,
  },

  cardContent: {
    flex: 1,
  },

  cardLabel: {
    color: "#a78bfa",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 5,
  },

  cardValue: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },

  section: {
    marginTop: 38,
  },

  sectionLabel: {
    color: "#a78bfa",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 9,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 24,
    lineHeight: 31,
    fontWeight: "800",
    marginBottom: 11,
  },

  sectionDescription: {
    color: "#c4b5d4",
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 18,
  },

  techBox: {
    backgroundColor: "#171126",
    borderWidth: 1,
    borderColor: "#4c3570",
    borderRadius: 20,
    padding: 18,
  },

  techBoxHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  techBoxIcon: {
    color: "#c4b5fd",
    fontSize: 20,
    fontWeight: "900",
    backgroundColor: "#26183d",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 12,
  },

  techBoxHeaderText: {
    flex: 1,
  },

  techBoxTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },

  techBoxSubtitle: {
    color: "#9f8db5",
    fontSize: 12,
    marginTop: 3,
  },

  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  tag: {
    backgroundColor: "#321d50",
    borderWidth: 1,
    borderColor: "#5b3b82",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  tagText: {
    color: "#ddd6fe",
    fontSize: 13,
    fontWeight: "700",
  },

  knowledgeTag: {
    backgroundColor: "#171126",
    borderWidth: 1,
    borderColor: "#4c3570",
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 9,
  },

  knowledgeTagText: {
    color: "#ede9fe",
    fontSize: 13,
    fontWeight: "600",
  },

  finalCard: {
    flexDirection: "row",
    backgroundColor: "#201436",
    borderWidth: 1,
    borderColor: "#5b3b82",
    borderRadius: 20,
    padding: 18,
    marginTop: 38,
  },

  finalIcon: {
    color: "#c4b5fd",
    fontSize: 24,
    marginRight: 13,
  },

  finalContent: {
    flex: 1,
  },

  finalTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 5,
  },

  finalText: {
    color: "#c4b5d4",
    fontSize: 14,
    lineHeight: 21,
  },
});