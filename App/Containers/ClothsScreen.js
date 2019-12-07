import React, { Component } from 'react'
import { ScrollView,  KeyboardAvoidingView,ImageBackground,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity } from 'react-native'
import {Header,Left,Body,Right,Container,Content,Footer, Text,Button, Icon} from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ClothsScreenStyle'


const summer = [  
  {
      id: 1,
      title: 'Gul Ahmad',
      img: require('../Images/menn1.png'),
      price: 350
  },
  {
    id: 1,
    title: 'Alkaram',
    img: require('../Images/menn2.png'),
    price: 350
},
{
  id: 1,
  title: 'Grace',
  img: require('../Images/menn7.png'),
  price: 350
},
{
id: 1,
title: 'Local',
img: require('../Images/menn4.png'),
price: 350
},
{
  id: 1,
  title: 'Grace',
  img: require('../Images/menn5.png'),
  price: 350
},
{
id: 1,
title: 'Gul Ahmad',
img: require('../Images/menn6.png'),
price: 350
},  {
  id: 1,
  title: 'Alkaram',
  img: require('../Images/menn7.png'),
  price: 350
},
{
id: 1,
title: 'Grace',
img: require('../Images/menn2.png'),
price: 350
}
]


const winter = [ 
  {
      id: 1,
      title: 'UnStitched Cloths',
      img: require('../Images/winter1.png'),
      price: 350
  },
  {
    id: 1,
    title: 'Stitched Cloths',
    img: require('../Images/men2.png'),
    price: 350
},
{
  id: 1,
  title: 'UnStitched Cloths',
  img: require('../Images/winter1.png'),
  price: 350
},
{
id: 1,
title: 'Stitched Cloths',
img: require('../Images/men2.png'),
price: 350
},
{
  id: 1,
  title: 'UnStitched Cloths',
  img: require('../Images/winter1.png'),
  price: 350
},
{
id: 1,
title: 'Stitched Cloths',
img: require('../Images/men2.png'),
price: 350
}
]


class ClothsScreen extends Component {

  constructor(props){
    super(props);
    this.state={
      buttonColorm:'black',
      textColorm:'white',
      buttonColorw:'white',
      textColorw:'black',
      DISHES: summer,

    }
  }


  render () {



    const rows = this.state.DISHES.map((value, index) => {
      return ( 
        <Button style={{width:350,height:300, margin:30, justifyContent:'center', alignContent:'center', borderWidth:3,borderColor:'black'}}
        >
          <ImageBackground style={{width:350,height:300, justifyContent:'center', alignContent:'center'}} resizeMode='cover' source={value.img}>
          </ImageBackground>
            <Text>{value.title}</Text>
        </Button>
      )
    })

    return (
      <Container>
      <Header>
        <Left style={{flex:1}}>         
            <Icon style={{ fontSize: 50 }} name="arrow-round-back"
            onPress={()=>this.props.navigation.navigate('HomeScreen')}/> 
        </Left>
        <Body style={{flex:2}}>
          <Text style={{fontSize:20}}>
            Men UnStitched Cloths
          </Text>
        </Body>
        <Right style={{flex:1}}>
          <Button transparent>
            <Text>
              Filter
            </Text>
          </Button>
        </Right>
      </Header>
      <Content style={{flex:1,backgroundColor:'#F5F5F5'}}>
        <View style={{flexDirection:'row',backgroundColor:'#F5F5F5',margin:10}}>
        <Button full style={{flex:1,borderWidth:2,backgroundColor:this.state.buttonColorm, borderColor:'black',justifyContent:'center'}}
          onPress={this.summer}>
            <Text style={{color:this.state.textColorm}}>Summer</Text>
          </Button>
          <Button full style={{flex:1,backgroundColor:this.state.buttonColorw, borderWidth:2, borderColor:'black',justifyContent:'center'}}
          onPress={this.winter}>
            <Text style={{color:this.state.textColorw}}>Winter</Text>
          </Button>

        </View>
         <View style={styles.MainContainer}>
        <FlatList
          data={this.state.DISHES}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailScreen')} style={{ flex: 1, flexDirection: 'column', margin: 5, justifyContent:'center' }}>  

              <Image style={styles.imageThumbnail} source={item.img} />
              <Text style={{  alignContent:'center', fontSize:25}}>{item.title}</Text>
              <Text style={{  alignContent:'center', fontSize:15}}>Rs {item.price}</Text>
            
            </TouchableOpacity> 
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      </Content>
    </Container>
    )
  }

  winter = () =>{
    if(this.state.buttonColorw === 'white'){
      this.setState({buttonColorm:'white', textColorm:'black',buttonColorw:'black', textColorw:'white', DISHES:winter})
     }//else{
    //   this.setState({buttonColorm:'black', textColorm:'white',buttonColorw:'white', textColorw:'black'})
    // }
  }

  summer = () =>{
    if(this.state.buttonColorm === 'white'){
      this.setState({buttonColorm:'black', textColorm:'white',buttonColorw:'white', textColorw:'black',DISHES :summer})
     }
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClothsScreen)
