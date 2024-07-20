import { StatusBar } from 'expo-status-bar';
import React,{useState}from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View,Keyboard } from 'react-native';
import Task from './components/Task';
export default function App() {
  const [task,SetTask] =useState();
  const [taskitems,Settaskitems]=useState([])


  const handletask=()=>{
    Keyboard.dismiss();
    Settaskitems([...taskitems,task])
    SetTask(null)
  }
   
      
  const completeTask = (index) => {
    let itemsCopy = [...taskitems];
    itemsCopy.splice(index, 1);
    Settaskitems(itemsCopy)
  }
  return(
    <View style={styles.container}>
       <View style={styles.tasksWrapper}>
         <Text style={styles.sectionTitle}>Don't Forget to do these today!</Text>
          <View style={styles.items}>
          {
          taskitems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })

          
        }</View>

             
        </View>
      
         {/*write task*/}
         <KeyboardAvoidingView
           behavior={Platform.OS === 'android' ? 'padding' : 'height'}
           style={styles.writetaskWrapper}>
           <TextInput style={styles.input} placeholder='Write a task'value={task} onChangeText={text=>SetTask(text)}/>
           <TouchableOpacity onPress={()=>handletask()}>
          
             <View style={styles.addwrapper}>
              <Text style={styles.addText}>+</Text>

             </View>

           </TouchableOpacity>
         </KeyboardAvoidingView>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#dbf065`,
    },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:26,
    fontWeight:'bold'
  },
  writetaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addwrapper:{
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText:{}
  });


  
