import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
} from "react-native";

import NumberInput from "../components/NumberInput";
import GuessButton from "../components/GuessButton";
import styles from "../styles/styles";

function generateNumber() {
  return Math.floor(Math.random() * 10);
}

export default function GameScreen() {
  const [secretNumber, setSecretNumber] =
    useState(generateNumber());

  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(3);
  const [message, setMessage] = useState(
    "Tente descobrir o número!"
  );
  const [gameFinished, setGameFinished] =
    useState(false);

  function checkGuess() {
    if (guess === "") {
      setMessage("Digite um número.");
      return;
    }

    const playerGuess = Number(guess);

    if (playerGuess === secretNumber) {
      setMessage("Parabéns! Você acertou!");
      setGameFinished(true);
      return;
    }

    const remaining = attempts - 1;

    if (remaining <= 0) {
      setAttempts(0);
      setMessage(
        `Você perdeu! O número era ${secretNumber}.`
      );
      setGameFinished(true);
      return;
    }

    setAttempts(remaining);

    setMessage(
      `Errado! Restam ${remaining} tentativa(s).`
    );

    setGuess("");
  }

  function restartGame() {
    setSecretNumber(generateNumber());
    setGuess("");
    setAttempts(3);
    setMessage(
      "Nova partida iniciada. Boa sorte!"
    );
    setGameFinished(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Adivinhe o Número
        </Text>

        <Text style={styles.subtitle}>
          Escolha um número entre 0 e 9
        </Text>

        <NumberInput
          value={guess}
          onChangeText={setGuess}
          editable={!gameFinished}
        />

        {!gameFinished && (
          <GuessButton
            title="Tentar"
            onPress={checkGuess}
          />
        )}

        <Text style={styles.message}>
          {message}
        </Text>

        <Text style={styles.attempts}>
          Chances: {attempts}
        </Text>

        {gameFinished && (
          <GuessButton
            title="Jogar Novamente"
            onPress={restartGame}
            secondary
          />
        )}
      </View>
    </SafeAreaView>
  );
}