import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function ExperienciaProfissional() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.label}>EXPERIÊNCIA PROFISSIONAL</Text>

      <Text style={styles.title}>
        Minha trajetória{"\n"}
        <Text style={styles.highlight}>profissional</Text>
      </Text>

      <Text style={styles.description}>
        Estou construindo minha trajetória profissional e busco uma
        oportunidade que me permita aplicar os conhecimentos adquiridos
        durante minha formação em Ciência da Computação.
      </Text>

      <View style={styles.mainCard}>
        <View style={styles.cardHeader}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>💼</Text>
          </View>

          <View style={styles.headerContent}>
            <Text style={styles.status}>OBJETIVO PROFISSIONAL</Text>

            <Text style={styles.statusDescription}>
              Área de Tecnologia
            </Text>
          </View>
        </View>

        <Text style={styles.cardTitle}>
          Em busca da primeira oportunidade na área
        </Text>

        <Text style={styles.cardText}>
          Busco uma oportunidade de estágio ou experiência profissional
          que me permita aplicar meus conhecimentos em programação e
          desenvolvimento de software, além de continuar evoluindo
          tecnicamente.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.focusTitle}>
          ÁREAS DE INTERESSE
        </Text>

        <View style={styles.tags}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>
              Desenvolvimento de Software
            </Text>
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

          <View style={styles.tag}>
            <Text style={styles.tagText}>
              Programação
            </Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>
              Tecnologia
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>
          COMPETÊNCIAS
        </Text>

        <Text style={styles.sectionTitle}>
          O que posso{" "}
          <Text style={styles.highlight}>contribuir</Text>
        </Text>

        <Text style={styles.sectionDescription}>
          Durante minha formação e participação em projetos acadêmicos,
          venho desenvolvendo competências técnicas e comportamentais
          importantes para o ambiente profissional.
        </Text>

        <View style={styles.skillsContainer}>
          <View style={styles.skillCard}>
            <View style={styles.skillIconContainer}>
              <Text style={styles.skillIcon}>{"</>"}</Text>
            </View>

            <View style={styles.skillContent}>
              <Text style={styles.skillTitle}>
                Desenvolvimento
              </Text>

              <Text style={styles.skillText}>
                Conhecimentos em programação, desenvolvimento web,
                mobile e orientação a objetos.
              </Text>
            </View>
          </View>

          <View style={styles.skillCard}>
            <View style={styles.skillIconContainer}>
              <Text style={styles.skillIcon}>🧠</Text>
            </View>

            <View style={styles.skillContent}>
              <Text style={styles.skillTitle}>
                Aprendizado
              </Text>

              <Text style={styles.skillText}>
                Interesse constante em aprender novas tecnologias,
                ferramentas e formas de desenvolver soluções.
              </Text>
            </View>
          </View>

          <View style={styles.skillCard}>
            <View style={styles.skillIconContainer}>
              <Text style={styles.skillIcon}>🤝</Text>
            </View>

            <View style={styles.skillContent}>
              <Text style={styles.skillTitle}>
                Trabalho em Equipe
              </Text>

              <Text style={styles.skillText}>
                Experiência em projetos acadêmicos desenvolvidos de
                forma colaborativa e utilizando metodologias ágeis.
              </Text>
            </View>
          </View>

          <View style={styles.skillCard}>
            <View style={styles.skillIconContainer}>
              <Text style={styles.skillIcon}>🎯</Text>
            </View>

            <View style={styles.skillContent}>
              <Text style={styles.skillTitle}>
                Organização
              </Text>

              <Text style={styles.skillText}>
                Organização de tarefas e acompanhamento das etapas
                necessárias para o desenvolvimento dos projetos.
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>
          EXPERIÊNCIA PRÁTICA
        </Text>

        <Text style={styles.sectionTitle}>
          Projetos como parte da{" "}
          <Text style={styles.highlight}>formação</Text>
        </Text>

        <View style={styles.experienceCard}>
          <Text style={styles.experienceIcon}>💻</Text>

          <Text style={styles.experienceTitle}>
            Projetos Acadêmicos
          </Text>

          <Text style={styles.experienceText}>
            Mesmo em busca da primeira oportunidade profissional na
            área, já participei do desenvolvimento de projetos
            envolvendo programação, desenvolvimento de software,
            robótica, visão computacional, aplicações web e
            aplicativos mobile.
          </Text>

          <View style={styles.projectTags}>
            <View style={styles.smallTag}>
              <Text style={styles.smallTagText}>Web</Text>
            </View>

            <View style={styles.smallTag}>
              <Text style={styles.smallTagText}>Mobile</Text>
            </View>

            <View style={styles.smallTag}>
              <Text style={styles.smallTagText}>Java</Text>
            </View>

            <View style={styles.smallTag}>
              <Text style={styles.smallTagText}>Python</Text>
            </View>

            <View style={styles.smallTag}>
              <Text style={styles.smallTagText}>React</Text>
            </View>

            <View style={styles.smallTag}>
              <Text style={styles.smallTagText}>React Native</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.finalCard}>
        <Text style={styles.finalIcon}>✦</Text>

        <View style={styles.finalContent}>
          <Text style={styles.finalTitle}>
            Próximo passo
          </Text>

          <Text style={styles.finalText}>
            Busco transformar os conhecimentos desenvolvidos durante
            minha formação acadêmica em experiência profissional e
            continuar crescendo na área de tecnologia.
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
    marginBottom: 28,
  },

  mainCard: {
    backgroundColor: "#171126",
    borderWidth: 1,
    borderColor: "#4c3570",
    borderRadius: 20,
    padding: 20,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#26183d",
    borderWidth: 1,
    borderColor: "#4c3570",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  icon: {
    fontSize: 23,
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

  statusDescription: {
    color: "#9f8db5",
    fontSize: 13,
    marginTop: 4,
  },

  cardTitle: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 27,
    fontWeight: "800",
    marginBottom: 11,
  },

  cardText: {
    color: "#c4b5d4",
    fontSize: 15,
    lineHeight: 23,
  },

  divider: {
    height: 1,
    backgroundColor: "#35264d",
    marginVertical: 18,
  },

  focusTitle: {
    color: "#9f8db5",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 11,
  },

  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  tag: {
    backgroundColor: "#26183d",
    borderWidth: 1,
    borderColor: "#4c3570",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  tagText: {
    color: "#ddd6fe",
    fontSize: 13,
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

  skillsContainer: {
    gap: 12,
  },

  skillCard: {
    flexDirection: "row",
    backgroundColor: "#171126",
    borderWidth: 1,
    borderColor: "#35264d",
    borderRadius: 17,
    padding: 16,
  },

  skillIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: "#26183d",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  skillIcon: {
    color: "#c4b5fd",
    fontSize: 20,
    fontWeight: "800",
  },

  skillContent: {
    flex: 1,
  },

  skillTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 5,
  },

  skillText: {
    color: "#9f8db5",
    fontSize: 14,
    lineHeight: 21,
  },

  experienceCard: {
    backgroundColor: "#171126",
    borderWidth: 1,
    borderColor: "#35264d",
    borderRadius: 20,
    padding: 19,
  },

  experienceIcon: {
    fontSize: 27,
    marginBottom: 12,
  },

  experienceTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 9,
  },

  experienceText: {
    color: "#c4b5d4",
    fontSize: 14,
    lineHeight: 22,
  },

  projectTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
    marginTop: 16,
  },

  smallTag: {
    backgroundColor: "#26183d",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  smallTagText: {
    color: "#ddd6fe",
    fontSize: 12,
    fontWeight: "600",
  },

  finalCard: {
    flexDirection: "row",
    backgroundColor: "#201436",
    borderWidth: 1,
    borderColor: "#5b3b82",
    borderRadius: 20,
    padding: 18,
    marginTop: 32,
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