import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
} from "react-native";

import NumberInput from "../components/InputPalpite";
import GuessButton from "../components/BotaoJogar";
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
    "Digite um número"
  );
  const [gameFinished, setGameFinished] =
    useState(false);

    function checkGuess() {
    if (guess.trim() === "") {
      setMessage("Digite um número entre 0 e 9.");
      return;
    }

    const playerGuess = Number(guess);

    if (playerGuess === secretNumber) {
      setMessage("Você acertou!");
      setGameFinished(true);
      return;
    }

    setAttempts(attempts - 1);

    if (attempts - 1 === 0) {
      setMessage(
        `O número era ${secretNumber}.`
      );

      setGameFinished(true);
    } else {
      setMessage(
        `Tente de novo ${
          attempts - 1
        } tentativas sobrando.`
      );
    }

    setGuess("");
  }

  function restartGame() {
    setSecretNumber(generateNumber());
    setGuess("");
    setAttempts(3);
    setGameFinished(false);
  }

  return (
    <SafeAreaView style={styles.container}>
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
            title="Jogar de novo"
            onPress={restartGame}
            secondary
          />
        )}
      {/* </View> */}
    </SafeAreaView>
  );
}