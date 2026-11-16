import { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const palavras = [
  "PIZZA",
  "LASANHA",
  "HAMBURGUER",
  "COXINHA",
  "PASTEL",
  "TAPIOCA",
  "CUSCUZ",
  "FEIJOADA",
  "MACARRAO",
  "ARROZ",
  "FEIJAO",
  "BATATA",
  "QUEIJO",
  "PIPOCA",
  "BOLO",
  "BRIGADEIRO",
  "SORVETE",
  "CHOCOLATE",
  "BISCOITO",
  "PANQUECA",
  "WAFFLE",
  "SANDUICHE",
  "CACHORROQUENTE",
  "EMPADA",
  "PUDIM",
  "MOUSSE",
  "PAODEQUEIJO",
  "SALADA",
  "OMELETE",
  "STROGONOFF",
  "ESCONDIDINHO",
  "ACARAJE",
  "CHURRASCO",
  "RISOTO",
  "TORTA",
  "CROISSANT",
];

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_ERROS = 6;

function sortearPalavra() {
  const indice = Math.floor(Math.random() * palavras.length);
  return palavras[indice];
}

export default function Jogo() {
  const [palavra, setPalavra] = useState(() => sortearPalavra());
  const [letrasUsadas, setLetrasUsadas] = useState<string[]>([]);

  const letrasErradas = letrasUsadas.filter(
    (letra) => !palavra.includes(letra)
  );

  const letrasCorretas = letrasUsadas.filter((letra) =>
    palavra.includes(letra)
  );

  const erros = letrasErradas.length;
  const tentativasRestantes = MAX_ERROS - erros;

  const venceu = palavra
    .split("")
    .every((letra) => letrasUsadas.includes(letra));

  const perdeu = erros >= MAX_ERROS;

  function escolherLetra(letra: string) {
    if (letrasUsadas.includes(letra) || venceu || perdeu) {
      return;
    }

    setLetrasUsadas((anteriores) => [...anteriores, letra]);
  }

  function iniciarNovoJogo() {
    setPalavra(sortearPalavra());
    setLetrasUsadas([]);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.label}>DESAFIO DE PALAVRAS</Text>

      <Text style={styles.title}>
        Jogo da <Text style={styles.highlight}>Forca</Text>
      </Text>

      <Text style={styles.subtitle}>
        Descubra qual é a comida antes que suas tentativas acabem.
      </Text>

      <View style={styles.attemptCard}>
        <Text style={styles.attemptLabel}>TENTATIVAS RESTANTES</Text>

        <Text style={styles.attemptNumber}>{tentativasRestantes}</Text>

        <Text style={styles.attemptTotal}>de {MAX_ERROS}</Text>
      </View>

      <View style={styles.hangmanCard}>
        <View style={styles.gallows}>
          <View style={styles.base} />
          <View style={styles.post} />
          <View style={styles.topBar} />
          <View style={styles.rope} />

          {erros >= 1 && <View style={styles.head} />}

          {erros >= 2 && <View style={styles.body} />}

          {erros >= 3 && <View style={styles.leftArm} />}

          {erros >= 4 && <View style={styles.rightArm} />}

          {erros >= 5 && <View style={styles.leftLeg} />}

          {erros >= 6 && <View style={styles.rightLeg} />}
        </View>
      </View>

      <View style={styles.gameCard}>
        <View style={styles.wordContainer}>
          {palavra.split("").map((letra, index) => {
            const mostrar =
              letrasUsadas.includes(letra) || perdeu;

            return (
              <Text
                key={`${letra}-${index}`}
                style={styles.wordLetter}
              >
                {mostrar ? letra : "_"}
              </Text>
            );
          })}
        </View>

        {!venceu && !perdeu && (
          <Text style={styles.instruction}>Escolha uma letra:</Text>
        )}

        {venceu && (
          <View style={[styles.result, styles.victory]}>
            <Text style={styles.resultIcon}>✓</Text>

            <View style={styles.resultContent}>
              <Text style={styles.resultTitle}>
                Você acertou!
              </Text>

              <Text style={styles.resultText}>
                A palavra era {palavra}.
              </Text>
            </View>
          </View>
        )}

        {perdeu && (
          <View style={[styles.result, styles.defeat]}>
            <Text style={styles.resultIcon}>×</Text>

            <View style={styles.resultContent}>
              <Text style={styles.resultTitle}>
                Fim de jogo!
              </Text>

              <Text style={styles.resultText}>
                A palavra era {palavra}.
              </Text>
            </View>
          </View>
        )}

        <View style={styles.keyboard}>
          {alfabeto.map((letra) => {
            const usada = letrasUsadas.includes(letra);
            const correta = usada && palavra.includes(letra);
            const errada = usada && !palavra.includes(letra);

            return (
              <Pressable
                key={letra}
                onPress={() => escolherLetra(letra)}
                disabled={usada || venceu || perdeu}
                style={[
                  styles.key,
                  correta && styles.correctKey,
                  errada && styles.wrongKey,
                  (venceu || perdeu) &&
                    !usada &&
                    styles.disabledKey,
                ]}
              >
                <Text
                  style={[
                    styles.keyText,
                    (correta || errada) && styles.usedKeyText,
                  ]}
                >
                  {letra}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.usedLetters}>
          <View style={styles.letterGroup}>
            <Text style={styles.groupTitle}>LETRAS CORRETAS</Text>

            <View style={styles.letterList}>
              {letrasCorretas.length === 0 ? (
                <Text style={styles.none}>Nenhuma</Text>
              ) : (
                letrasCorretas.map((letra) => (
                  <View
                    key={letra}
                    style={[styles.letterBadge, styles.correctBadge]}
                  >
                    <Text style={styles.badgeText}>{letra}</Text>
                  </View>
                ))
              )}
            </View>
          </View>

          <View style={styles.letterGroup}>
            <Text style={styles.groupTitle}>LETRAS ERRADAS</Text>

            <View style={styles.letterList}>
              {letrasErradas.length === 0 ? (
                <Text style={styles.none}>Nenhuma</Text>
              ) : (
                letrasErradas.map((letra) => (
                  <View
                    key={letra}
                    style={[styles.letterBadge, styles.wrongBadge]}
                  >
                    <Text style={styles.badgeText}>{letra}</Text>
                  </View>
                ))
              )}
            </View>
          </View>
        </View>

        <Pressable
          style={styles.newGameButton}
          onPress={iniciarNovoJogo}
        >
          <Text style={styles.newGameText}>Nova palavra</Text>
        </Pressable>
      </View>

      <View style={styles.info}>
        <Text style={styles.infoIcon}>💡</Text>

        <Text style={styles.infoText}>
          As palavras deste jogo são nomes de comidas e pratos.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
  },

  content: {
    padding: 20,
    paddingBottom: 50,
  },

  label: {
    color: "#38bdf8",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 10,
  },

  title: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "800",
  },

  highlight: {
    color: "#38bdf8",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 22,
  },

  attemptCard: {
    backgroundColor: "#0f172a",
    borderWidth: 1,
    borderColor: "#1e293b",
    borderRadius: 18,
    alignItems: "center",
    padding: 18,
    marginBottom: 15,
  },

  attemptLabel: {
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
  },

  attemptNumber: {
    color: "#38bdf8",
    fontSize: 40,
    fontWeight: "900",
    marginTop: 5,
  },

  attemptTotal: {
    color: "#64748b",
    fontSize: 13,
  },

  hangmanCard: {
    backgroundColor: "#0f172a",
    borderWidth: 1,
    borderColor: "#1e293b",
    borderRadius: 18,
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 15,
  },

  gallows: {
    width: 230,
    height: 245,
    position: "relative",
  },

  base: {
    position: "absolute",
    width: 180,
    height: 5,
    backgroundColor: "#64748b",
    left: 15,
    bottom: 10,
    borderRadius: 3,
  },

  post: {
    position: "absolute",
    width: 5,
    height: 215,
    backgroundColor: "#64748b",
    left: 55,
    bottom: 10,
    borderRadius: 3,
  },

  topBar: {
    position: "absolute",
    width: 115,
    height: 5,
    backgroundColor: "#64748b",
    left: 55,
    top: 15,
    borderRadius: 3,
  },

  rope: {
    position: "absolute",
    width: 4,
    height: 32,
    backgroundColor: "#64748b",
    left: 166,
    top: 15,
  },

  head: {
    position: "absolute",
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 4,
    borderColor: "#f8fafc",
    left: 146,
    top: 45,
  },

  body: {
    position: "absolute",
    width: 4,
    height: 65,
    backgroundColor: "#f8fafc",
    left: 166,
    top: 88,
  },

  leftArm: {
    position: "absolute",
    width: 45,
    height: 4,
    backgroundColor: "#f8fafc",
    left: 128,
    top: 112,
    transform: [{ rotate: "-35deg" }],
  },

  rightArm: {
    position: "absolute",
    width: 45,
    height: 4,
    backgroundColor: "#f8fafc",
    left: 165,
    top: 112,
    transform: [{ rotate: "35deg" }],
  },

  leftLeg: {
    position: "absolute",
    width: 50,
    height: 4,
    backgroundColor: "#f8fafc",
    left: 126,
    top: 169,
    transform: [{ rotate: "-52deg" }],
  },

  rightLeg: {
    position: "absolute",
    width: 50,
    height: 4,
    backgroundColor: "#f8fafc",
    left: 163,
    top: 169,
    transform: [{ rotate: "52deg" }],
  },

  gameCard: {
    backgroundColor: "#0f172a",
    borderWidth: 1,
    borderColor: "#1e293b",
    borderRadius: 18,
    padding: 18,
  },

  wordContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 7,
    marginVertical: 12,
  },

  wordLetter: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "800",
    minWidth: 16,
    textAlign: "center",
  },

  instruction: {
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
  },

  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 7,
    marginTop: 12,
  },

  key: {
    width: 38,
    height: 42,
    borderRadius: 9,
    backgroundColor: "#1e293b",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#334155",
  },

  correctKey: {
    backgroundColor: "#15803d",
    borderColor: "#22c55e",
  },

  wrongKey: {
    backgroundColor: "#b91c1c",
    borderColor: "#ef4444",
  },

  disabledKey: {
    opacity: 0.45,
  },

  keyText: {
    color: "#e2e8f0",
    fontSize: 15,
    fontWeight: "800",
  },

  usedKeyText: {
    color: "#ffffff",
  },

  result: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    padding: 15,
    marginVertical: 15,
  },

  victory: {
    backgroundColor: "#14532d",
  },

  defeat: {
    backgroundColor: "#7f1d1d",
  },

  resultIcon: {
    color: "#ffffff",
    fontSize: 27,
    fontWeight: "900",
    marginRight: 12,
  },

  resultContent: {
    flex: 1,
  },

  resultTitle: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "800",
  },

  resultText: {
    color: "#e2e8f0",
    fontSize: 14,
    marginTop: 2,
  },

  usedLetters: {
    marginTop: 25,
    gap: 20,
  },

  letterGroup: {
    gap: 8,
  },

  groupTitle: {
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
  },

  letterList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
  },

  none: {
    color: "#64748b",
    fontSize: 14,
  },

  letterBadge: {
    minWidth: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  correctBadge: {
    backgroundColor: "#15803d",
  },

  wrongBadge: {
    backgroundColor: "#b91c1c",
  },

  badgeText: {
    color: "#ffffff",
    fontWeight: "800",
  },

  newGameButton: {
    backgroundColor: "#0284c7",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 25,
  },

  newGameText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },

  info: {
    flexDirection: "row",
    backgroundColor: "#082f49",
    borderRadius: 14,
    padding: 15,
    marginTop: 16,
    alignItems: "center",
  },

  infoIcon: {
    fontSize: 20,
    marginRight: 10,
  },

  infoText: {
    color: "#bae6fd",
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
});