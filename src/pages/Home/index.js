
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';

const list= [
  {
    id:1,
    label:'Boleto conta luz',
    value: '300,90',
    date: '17/09/2024',
    type: 0 // despesas
  },

  {
    id:2,
    label:'PIX manicure',
    value: '50,00',
    date: '17/09/2024',
    type: 1 // 

  },

  {
    id:3,
    label:'Salario',
    value: '7,000,00',
    date: '17/09/2024',
    type: 1 // entrada


  }, 

]

export default function Home() {
  return (
    <View style={styles.container}>
     <Header name = "Bruna Bossard"/>

     <Balance saldo="9.250.90" gastos="-527,00">

     </Balance>
     
       <Text style={styles.title}>Ultimas movimentações</Text>

       <FlatList>
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Text>{item.label}</Text>}
       </FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:14,
    marginRight:14,
    marginTop:14,
  },
  list:{
    marginStart:'14',
    marginEnd:'14',
    

  }
});
