import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const App = () => {
  const [mensaje, setMensaje] = useState('');

  const MensajeAmarillo = () => {
    setMensaje('Amarillo - Ecuador');
  };

  const MensajeAzul = () => {
    setMensaje('Azul - Ecuador');
  };

  const MensajeRojo = () => {
    setMensaje('Rojo - Ecuador');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={MensajeAmarillo} style={styles.cuadradoAmarillo}>
        <View style={styles.cuadradoAzul}>
          <TouchableOpacity onPress={MensajeAzul} style={styles.cuadradoAzul}>
            <TouchableOpacity onPress={MensajeRojo} style={styles.cuadradoRojo}></TouchableOpacity>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {mensaje !== '' && <Text style={styles.mensaje}>{mensaje}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cuadradoAmarillo: {
    width: 200,
    height: 200,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cuadradoAzul: {
    width: 150,
    height: 150,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cuadradoRojo: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  mensaje: {
    marginTop: 20,  // Ajusta la distancia del mensaje hacia abajo
  },
});

export default App;
