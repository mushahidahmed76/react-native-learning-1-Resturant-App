import react, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Alert,Button,ScrollView } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  const [text, onChangeText] = useState(null);
  const [todoList, setTodoList] = useState([]);
  
  const handleAddTodo = () => {
    // Alert.alert(`Item Added`);
    if(text !== ''){
      setTodoList([...todoList,text]);
      onChangeText('');
    }    
  }
  const handleClearTodo = () =>{
    setTodoList([]);
  }

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Todo"
          onEndEditing={() => handleAddTodo()}
        />
        <Button
          style={styles.button}
          title="Add Todo"
          color="#333"
          onPress={() => handleAddTodo()}
        />
        
        <Button
          style={styles.button}
          title="Clear List"
          color="red"
          onPress={() => handleClearTodo()}
        />
      </View>
      { todoList.length !== 0 ? todoList.map((todo,i) => (<View style={styles.list} key={i}><Text style={styles.listText}>{ `${i+1}) ${todo}` }</Text></View>)) : ''}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
   
   
  },
  formContainer: {
    backgroundColor: '#fff',
    padding:10 ,
    flex:1,
    width:'100%',
    // alignItems:'center',
  },
  button:{
    width:10,
    marginBottom:10,
    marginTop:10
  },
  input:{
    borderWidth:1,
    width:'100%',
    padding:10,
    marginBottom:10
  
  },

  list:{
      padding:20,
      marginBottom:10,
      backgroundColor:'#999',
      width:'100%',
      borderRadius:10,
  },
  listText:{
    color:'#fff',
    fontSize: 18,
    fontWeight : 'bold',
  }
});