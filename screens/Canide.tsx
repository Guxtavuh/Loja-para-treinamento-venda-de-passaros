import { Image,ScrollView,Text, View } from "react-native";
import { styleshome } from "./styleshome";

export default function Canide(){
    return(
        <View style={{height:"100%", backgroundColor:"green"}}>
            <View style={{
                marginLeft:3,
                marginRight:3,
                marginTop:50,
                height:"55%",
                borderRadius:15,
                backgroundColor:"#228B22"

            }}> 
                <ScrollView horizontal={true}>
                <View style={{
                    justifyContent:"center",
                    alignItems:"center",
                    flexDirection:"row"
                }}>
                

                    <Image style={{
                            margin:40,
                            marginRight:1,
                            borderRadius:50,
                            height:410,
                            width:310,
                            marginTop:40

                    }} source={{uri:("https://upload.wikimedia.org/wikipedia/commons/3/30/Arara_Caninde.jpg")}}></Image>
                    <Image style={{
                            margin:40,
                            marginRight:1,
                            borderRadius:50,
                            height:410,
                            width:310,
                            marginTop:40

                    }} source={{uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27xSSMn5_1olv-VseRWrd5kI_8N0BuN7V3A&usqp=CAU")}}></Image>

                    
                    <Image style={{
                            margin:40,
                            borderRadius:50,
                            height:410,
                            width:310,
                            marginTop:40

                    }} source={{uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2EaN3Z0tSXSmHQ9BMzmiwPeIlLzZdzk6j0g&usqp=CAU")}}></Image>

                </View>
                </ScrollView>
            </View>
            <View style={{margin:15}}>
            <Text style={{color:"white", textAlign:"center", fontSize:30}} >Ave</Text>
            <Text style={styleshome.textcanide}>Arara-canindé</Text>
            <Text style={styleshome.textcanide}>A arara-canindé, também conhecida como arara-de-barriga-amarela, arari, arara-amarela, arara-azul-e-amarela, araraí e canindé, é uma das mais conhecidas representantes do gênero Ara, sendo uma das espécies emblemáticas do cerrado brasileiro e importante para muitas comunidades indígenas.</Text>
            <Text style={styleshome.textcanide}>Nome científico: Ara ararauna</Text>
            <Text style={styleshome.textcanide}>Comprimento: 81 – 91 cm</Text>
            <Text style={styleshome.textcanide}>Peso: 0,09 – 1,5 kg</Text>
            </View>

        </View>
    )
}