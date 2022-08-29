import { Image,ScrollView,Text,TouchableOpacity,View } from "react-native";
import { styleshome } from "./styleshome";;

export default function Home({navigation}){
    return(
    <View>
        {/* Header */}
        
        <View style={styleshome.head}>
            
            <View>
            <Image style={styleshome.caixaimg} source={{uri:("https://images.vexels.com/media/users/3/219947/isolated/lists/743b1c7ca4fc9c7560b65faea6c8e726-passaro-arara-papagaio.png")}}></Image>
            </View>
            <Text style={styleshome.titu}>GF Pássaros</Text>
            <View>
            
            <Image style={styleshome.caixaimg} source={{uri:("https://images.vexels.com/media/users/3/219833/isolated/lists/4ecc7d9a61e288b85eb7e2d2c27fa349-animal-papagaio-passaro-voando.png")}}></Image>
            </View>
        </View>
        
        {/* Main */}
        <View style={{borderBottomColor:"black", borderWidth:0.2, marginTop: 0, borderColor:"#006400"}}/>
        <View style={styleshome.main}>
        <ScrollView horizontal={false}>
            <Text style={styleshome.maintitu}>Aqui Você encontra todas variedades !</Text>

            {/* Barra de rolagem de passaros */}
            
            <View style={styleshome.pass}>
                        
                    
                        <View style={styleshome.passcaixa}>
                        <Image style={styleshome.imgpass} source={{uri:("https://www.reporterdiario.com.br/wp-content/uploads/2019/10/arara.jpg")}}></Image>
                        <Text style={styleshome.textpass}>Arara-canindé</Text>
                        <Text style={styleshome.textpass}>R$: 7.600.00</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate("Canide")}>
                                <Text style={styleshome.textpassdetalhes}>Detalhes</Text>
                        </TouchableOpacity> 
                    </View>

                         
            </View>



            <View style={styleshome.pass}>
                        
                    
                        <View style={styleshome.passcaixa}>
                        <Image style={styleshome.imgpass} source={{uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyr3aa5h52BtN_3n4tw3qdOJZ0zKSVwtmlZdyBL-12GDfx5Z85-WZGonpWPlucFIoOH0&usqp=CAU")}}></Image>
                        <Text style={styleshome.textpass}>Canário</Text>
                        <Text style={styleshome.textpass}>R$: 350.00</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate("Canario")}>
                                <Text style={styleshome.textpassdetalhes}>Detalhes</Text>
                        </TouchableOpacity> 
                    </View>

                  
            </View>


            <View style={styleshome.pass}>
                        
                    
                        <View style={styleshome.passcaixa}>
                        <Image style={styleshome.imgpass} source={{uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNfgzPD7Fgb29lQmskNstazjByGQONHt5Mle16S3bUdmglIJh1wB57HUUkvBPOvynTIg&usqp=CAU")}}></Image>
                        <Text style={styleshome.textpass}>Pardal</Text>
                        <Text style={styleshome.textpass}>R$: 150.00</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate("Pardal")}>
                                <Text style={styleshome.textpassdetalhes}>Detalhes</Text>
                        </TouchableOpacity> 
                    </View>

                  
            </View>
            </ScrollView>     
        </View>
        
        </View>
        
    )
}