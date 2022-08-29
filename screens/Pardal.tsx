import { Image,ScrollView,Text, View } from "react-native";
import { styleshome } from "./styleshome";

export default function Pardal(){
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

                    }} source={{uri:("https://blog.cobasi.com.br/wp-content/uploads/2021/09/sparrow-3698507_640.jpg")}}></Image>
                    <Image style={{
                            margin:40,
                            marginRight:1,
                            borderRadius:50,
                            height:410,
                            width:310,
                            marginTop:40

                    }} source={{uri:("data:image/jpeg;base64,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")}}></Image>

                    
                    <Image style={{
                            margin:40,
                            borderRadius:50,
                            height:410,
                            width:310,
                            marginTop:40

                    }} source={{uri:("https://2.bp.blogspot.com/-h23UV-w3nRA/V8HMBrKd9uI/AAAAAAAACIA/ZMbQM0uIw5QFqfKVwBeLqVWnzma1S3CRACLcB/s1600/pardal.jpg")}}></Image>

                </View>
                </ScrollView>
            </View>
            <View style={{margin:15}}>
            <Text style={{color:"white", textAlign:"center", fontSize:30}} >Ave</Text>
            <Text style={styleshome.textcanide}>Pardal</Text>
            <Text style={styleshome.textcanide}>Passer é um gênero da família Passeridae, também conhecido como pardal. O gênero inclui o P. domesticus e o P. montanus, algumas das aves mais comuns no mundo. São pequenos pássaros com bicos grossos para comer sementes, e são, na sua maioria, de cor cinza ou marrom</Text>
            <Text style={styleshome.textcanide}>Nome científico: Passer</Text>
            <Text style={styleshome.textcanide}>Comprimento: 1 – 8 cm</Text>
            <Text style={styleshome.textcanide}>Peso: 0,02 – 0,6 kg</Text>
            </View>

        </View>
    )
}