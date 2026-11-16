import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ExperienciaAcademica() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.label}>EXPERIÊNCIA ACADÊMICA</Text>

      <Text style={styles.title}>
        Minha{"\n"}
        <Text style={styles.highlight}>Formação</Text>
      </Text>

      <Text style={styles.description}>
        Minha trajetória acadêmica e os conhecimentos que venho
        desenvolvendo durante minha formação na área de tecnologia.
      </Text>

      <View style={styles.timeline}>
        <View style={styles.timelineItem}>
          <View style={styles.timelineLeft}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineLine} />
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>🎓</Text>
              </View>

              <View style={styles.headerContent}>
                <Text style={styles.status}>
                  EM ANDAMENTO
                </Text>

                <Text style={styles.date}>
                  2024 - atual
                </Text>
              </View>
            </View>

            <Text style={styles.cardTitle}>
              Bacharelado em Ciência da Computação
            </Text>

            <Text style={styles.institution}>
              Universidade Católica de Pernambuco
            </Text>

            <Text style={styles.conclusion}>
              Previsão de conclusão: junho de 2028
            </Text>

            <View style={styles.divider} />

            <Text style={styles.cardText}>
              Durante a graduação, venho desenvolvendo conhecimentos
              em programação, desenvolvimento de software, banco de
              dados, estruturas de dados, Programação Orientada a
              Objetos e desenvolvimento web e mobile.
            </Text>

            <View style={styles.tags}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Programação</Text>
              </View>

              <View style={styles.tag}>
                <Text style={styles.tagText}>
                  Desenvolvimento de Software
                </Text>
              </View>

              <View style={styles.tag}>
                <Text style={styles.tagText}>Banco de Dados</Text>
              </View>

              <View style={styles.tag}>
                <Text style={styles.tagText}>
                  Estruturas de Dados
                </Text>
              </View>

              <View style={styles.tag}>
                <Text style={styles.tagText}>POO</Text>
              </View>

              <View style={styles.tag}>
                <Text style={styles.tagText}>
                  Desenvolvimento Web
                </Text>
              </View>

              <View style={styles.tag}>
                <Text style={styles.tagText}>
                  Desenvolvimento Mobile
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.timelineItem}>
          <View style={styles.timelineLeft}>
            <View style={styles.timelineDotSecondary} />
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>💻</Text>
              </View>

              <View style={styles.headerContent}>
                <Text style={styles.completedStatus}>
                  CONCLUÍDO
                </Text>

                <Text style={styles.date}>
                  2019
                </Text>
              </View>
            </View>

            <Text style={styles.cardTitle}>
              Técnico em Redes de Computadores
            </Text>

            <Text style={styles.institution}>
              ETE Governador Eduardo Campos
            </Text>

            <View style={styles.divider} />

            <Text style={styles.cardText}>
              Formação técnica voltada à área de tecnologia e
              infraestrutura de redes de computadores.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.learningSection}>
        <Text style={styles.sectionLabel}>
          APRENDIZADO
        </Text>

        <Text style={styles.sectionTitle}>
          Conhecimentos em{" "}
          <Text style={styles.highlight}>
            desenvolvimento
          </Text>
        </Text>

        <Text style={styles.sectionText}>
          Ao longo da formação acadêmica, participei de projetos
          individuais e em equipe que contribuíram para o
          desenvolvimento das minhas habilidades técnicas e para a
          aplicação prática dos conteúdos estudados.
        </Text>

        <View style={styles.learningGrid}>
          <View style={styles.learningCard}>
            <Text style={styles.learningIcon}>{"</>"}</Text>
            <Text style={styles.learningTitle}>
              Programação
            </Text>
            <Text style={styles.learningText}>
              Desenvolvimento da lógica e utilização de diferentes
              linguagens.
            </Text>
          </View>

          <View style={styles.learningCard}>
            <Text style={styles.learningIcon}>🗄️</Text>
            <Text style={styles.learningTitle}>
              Banco de Dados
            </Text>
            <Text style={styles.learningText}>
              Modelagem, consultas e organização de informações.
            </Text>
          </View>

          <View style={styles.learningCard}>
            <Text style={styles.learningIcon}>🌐</Text>
            <Text style={styles.learningTitle}>
              Web e Mobile
            </Text>
            <Text style={styles.learningText}>
              Desenvolvimento de interfaces e aplicações para
              diferentes plataformas.
            </Text>
          </View>

          <View style={styles.learningCard}>
            <Text style={styles.learningIcon}>🤝</Text>
            <Text style={styles.learningTitle}>
              Trabalho em Equipe
            </Text>
            <Text style={styles.learningText}>
              Participação em projetos acadêmicos utilizando
              metodologias e ferramentas colaborativas.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.finalCard}>
        <Text style={styles.finalIcon}>✦</Text>

        <View style={styles.finalContent}>
          <Text style={styles.finalTitle}>
            Formação em andamento
          </Text>

          <Text style={styles.finalText}>
            Continuo ampliando meus conhecimentos e desenvolvendo
            novos projetos durante a graduação em Ciência da
            Computação.
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
    marginBottom: 16,
  },

  highlight: {
    color: "#a78bfa",
  },

  description: {
    color: "#c4b5d4",
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 30,
  },

  timeline: {
    gap: 0,
  },

  timelineItem: {
    flexDirection: "row",
  },

  timelineLeft: {
    width: 25,
    alignItems: "center",
  },

  timelineDot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: "#a78bfa",
    borderWidth: 3,
    borderColor: "#4c3570",
    marginTop: 22,
  },

  timelineDotSecondary: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: "#7c3aed",
    borderWidth: 3,
    borderColor: "#4c3570",
    marginTop: 22,
  },

  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: "#35264d",
  },

  card: {
    flex: 1,
    backgroundColor: "#171126",
    borderWidth: 1,
    borderColor: "#35264d",
    borderRadius: 20,
    padding: 19,
    marginBottom: 20,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
  },

  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#26183d",
    borderWidth: 1,
    borderColor: "#4c3570",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  icon: {
    fontSize: 22,
  },

  headerContent: {
    flex: 1,
  },

  status: {
    color: "#c4b5fd",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
  },

  completedStatus: {
    color: "#ddd6fe",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
  },

  date: {
    color: "#9f8db5",
    fontSize: 13,
    marginTop: 4,
  },

  cardTitle: {
    color: "#ffffff",
    fontSize: 19,
    lineHeight: 26,
    fontWeight: "800",
  },

  institution: {
    color: "#a78bfa",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 7,
  },

  conclusion: {
    color: "#9f8db5",
    fontSize: 13,
    marginTop: 5,
  },

  divider: {
    height: 1,
    backgroundColor: "#35264d",
    marginVertical: 17,
  },

  cardText: {
    color: "#c4b5d4",
    fontSize: 14,
    lineHeight: 22,
  },

  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
    marginTop: 16,
  },

  tag: {
    backgroundColor: "#26183d",
    borderWidth: 1,
    borderColor: "#4c3570",
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },

  tagText: {
    color: "#ddd6fe",
    fontSize: 12,
    fontWeight: "600",
  },

  learningSection: {
    marginTop: 20,
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

  sectionText: {
    color: "#c4b5d4",
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 18,
  },

  learningGrid: {
    gap: 12,
  },

  learningCard: {
    backgroundColor: "#171126",
    borderWidth: 1,
    borderColor: "#35264d",
    borderRadius: 17,
    padding: 17,
  },

  learningIcon: {
    color: "#c4b5fd",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 10,
  },

  learningTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 6,
  },

  learningText: {
    color: "#9f8db5",
    fontSize: 14,
    lineHeight: 21,
  },

  finalCard: {
    flexDirection: "row",
    backgroundColor: "#201436",
    borderWidth: 1,
    borderColor: "#5b3b82",
    borderRadius: 20,
    padding: 18,
    marginTop: 30,
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