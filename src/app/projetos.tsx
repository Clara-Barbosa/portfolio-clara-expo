import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const projetos = [
  {
    titulo: "Extrator de PDF — 5º CTA",
    descricao:
      "Projeto acadêmico desenvolvido para o 5º CTA do Exército Brasileiro, com foco na extração de informações de arquivos PDF e criação da interface do sistema.",
    tecnologias: [
      "Python",
      "Interface",
      "Scrum",
      "Trabalho em equipe",
    ],
    icone: "📄",
  },
  {
    titulo: "Olhos de Águia — 5º CTA",
    descricao:
      "Projeto de robótica e visão computacional que envolveu a construção de um drone e a realização de três masterclasses sobre componentes de hardware e introdução à visão computacional.",
    tecnologias: [
      "Robótica",
      "Visão Computacional",
      "Hardware",
      "Apresentação técnica",
    ],
    icone: "🚁",
  },
  {
    titulo: "Motor de Precificação Dinâmica",
    descricao:
      "Projeto acadêmico desenvolvido com Java e JUnit, com foco em lógica de negócio, testes e organização do código.",
    tecnologias: [
      "Java",
      "JUnit",
      "Lógica",
    ],
    icone: "⚙️",
  },
  {
    titulo: "Sistema de Gerenciamento de Eventos",
    descricao:
      "Projeto acadêmico desenvolvido com foco em Programação Orientada a Objetos e organização das informações relacionadas a eventos.",
    tecnologias: [
      "Java",
      "POO",
      "Estruturas de Dados",
    ],
    icone: "📅",
  },
  {
    titulo: "Portfólio Pessoal",
    descricao:
      "Portfólio desenvolvido para a disciplina de Programação Web Mobile, reunindo informações sobre minha formação, habilidades, projetos e experiências acadêmicas.",
    tecnologias: [
      "Next.js",
      "React",
      "JavaScript",
      "CSS",
      "Vercel",
    ],
    icone: "🌐",
  },
  {
    titulo: "Jogo da Forca",
    descricao:
      "Jogo de palavras desenvolvido inicialmente para web e posteriormente adaptado para React Native. O jogador deve descobrir nomes de comidas e pratos antes de atingir o limite de seis erros.",
    tecnologias: [
      "React",
      "React Native",
      "TypeScript",
      "Expo",
      "Lógica",
    ],
    icone: "🎮",
  },
  {
    titulo: "Mini Bio — React Native",
    descricao:
      "Aplicativo desenvolvido durante a disciplina de Programação Web Mobile para praticar o desenvolvimento de interfaces para dispositivos móveis utilizando React Native e Expo.",
    tecnologias: [
      "React Native",
      "Expo",
      "JavaScript",
      "Mobile",
    ],
    icone: "📱",
  },
  {
    titulo: "Jogo de Dados — React Native",
    descricao:
      "Aplicativo de jogo de dados desenvolvido com React Native e Expo, trabalhando interação com o usuário, geração de resultados e atualização da interface durante a execução do aplicativo.",
    tecnologias: [
      "React Native",
      "Expo",
      "JavaScript",
      "Lógica",
    ],
    icone: "🎲",
  },
];

export default function Projetos() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.label}>PROJETOS</Text>

      <Text style={styles.title}>
        Projetos que{"\n"}
        <Text style={styles.highlight}>já desenvolvi</Text>
      </Text>

      <Text style={styles.description}>
        Alguns dos projetos que desenvolvi durante minha formação,
        envolvendo programação, desenvolvimento web e mobile,
        orientação a objetos, testes, robótica, visão computacional
        e trabalho em equipe.
      </Text>

      <View style={styles.counter}>
        <Text style={styles.counterNumber}>{projetos.length}</Text>

        <View>
          <Text style={styles.counterTitle}>
            PROJETOS
          </Text>

          <Text style={styles.counterText}>
            acadêmicos e pessoais
          </Text>
        </View>
      </View>

      <View style={styles.projectsContainer}>
        {projetos.map((projeto, index) => (
          <View
            style={styles.card}
            key={projeto.titulo}
          >
            <View style={styles.cardTop}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>
                  {projeto.icone}
                </Text>
              </View>

              <Text style={styles.projectNumber}>
                {String(index + 1).padStart(2, "0")}
              </Text>
            </View>

            <Text style={styles.cardTitle}>
              {projeto.titulo}
            </Text>

            <Text style={styles.cardDescription}>
              {projeto.descricao}
            </Text>

            <View style={styles.divider} />

            <Text style={styles.techTitle}>
              TECNOLOGIAS E CONHECIMENTOS
            </Text>

            <View style={styles.tags}>
              {projeto.tecnologias.map((tecnologia) => (
                <View
                  style={styles.tag}
                  key={`${projeto.titulo}-${tecnologia}`}
                >
                  <Text style={styles.tagText}>
                    {tecnologia}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      <View style={styles.finalCard}>
        <View style={styles.finalIconContainer}>
          <Text style={styles.finalIcon}>✦</Text>
        </View>

        <View style={styles.finalContent}>
          <Text style={styles.finalTitle}>
            Em constante evolução
          </Text>

          <Text style={styles.finalText}>
            Cada projeto representa uma etapa do meu aprendizado
            e da construção da minha experiência em Ciência da
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
    marginBottom: 25,
  },

  counter: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#171126",
    borderWidth: 1,
    borderColor: "#35264d",
    borderRadius: 18,
    padding: 17,
    marginBottom: 22,
  },

  counterNumber: {
    color: "#a78bfa",
    fontSize: 34,
    fontWeight: "900",
    marginRight: 14,
  },

  counterTitle: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 1,
  },

  counterText: {
    color: "#9f8db5",
    fontSize: 13,
    marginTop: 2,
  },

  projectsContainer: {
    gap: 18,
  },

  card: {
    backgroundColor: "#171126",
    borderWidth: 1,
    borderColor: "#35264d",
    borderRadius: 20,
    padding: 20,
  },

  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 17,
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
  },

  icon: {
    fontSize: 23,
  },

  projectNumber: {
    color: "#66557c",
    fontSize: 16,
    fontWeight: "800",
  },

  cardTitle: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 27,
    fontWeight: "800",
    marginBottom: 11,
  },

  cardDescription: {
    color: "#c4b5d4",
    fontSize: 15,
    lineHeight: 23,
  },

  divider: {
    height: 1,
    backgroundColor: "#35264d",
    marginVertical: 18,
  },

  techTitle: {
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

  finalCard: {
    flexDirection: "row",
    backgroundColor: "#201436",
    borderWidth: 1,
    borderColor: "#5b3b82",
    borderRadius: 20,
    padding: 18,
    marginTop: 22,
    alignItems: "flex-start",
  },

  finalIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#321d50",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  finalIcon: {
    color: "#c4b5fd",
    fontSize: 22,
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