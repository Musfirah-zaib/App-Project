import React from 'react'
import {View,Text,Image} from 'react-native'
import styles from "./styles"
import { TouchableOpacity} from 'react-native'

const Home = (navigation) => {
  return (
   <View style={styles.container}>
            <View  style={styles.header}>
              <Image style={styles.logo}  source={require("../../assets/foto_Perfil.png")}/>
              <View  style={styles.headerText}>
              <Text style={styles.name}>Musfirah </Text>
              <Text style={styles.post}>Administrator</Text>
              </View>
              <TouchableOpacity  style={styles.bell}>
              <Image source={require("../../assets/bell.png")}/></TouchableOpacity> 
            </View>
            <View style={styles.search}>
                  <View style={styles.searchBar}>
                  <Image style={styles.searchImg}  source={require("../../assets/search.png")}/>
                  <TouchableOpacity style={styles.searchText}> 
                    <Text>Search....</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.filter}>
                 <Image style={styles.filterImg}  source={require("../../assets/filter.png")}/> 
                </TouchableOpacity> 
                </View>
            </View>
            <View style={styles.sliderContainer}>
              <View style={styles.sliderLeft}>
                <Text style={styles.sliderText}>Manage</Text>
                <Text style={styles.sliderText2}>Stock</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Access</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sliderRight}>
                <Image style={styles.sliderImg}  source={require("../../assets/slider_img.png")}/>  
              </View>
            </View>
            <View style={styles.slider}>
              <TouchableOpacity>  
                 <Image style={{width:80,}} source={require("../../assets/slider.png")}/>
            </TouchableOpacity>
            </View>

            <View  style={styles.statContainer}>
                   <Text style={styles.statText}>Stats</Text>
                 <View  style={styles.stat}>
                    <View style={styles.product}>
                         <View style={styles.material}>
                             <Image source={require("../../assets/chart.png")}/> 
                             <Text style={{fontSize:20,color:"white",fontWeight:600,}} >920</Text> 
                             <Text style={{fontSize:10,color:"white",fontWeight:600,}} >Products</Text> 
                          </View>
                    </View>
                    <View style={styles.vender}>
                          <View style={styles.material}>
                             <Image source={require("../../assets/pc.png")}/> 
                             <Text style={{fontSize:20,color:"white",fontWeight:600,}} >52</Text> 
                             <Text style={{fontSize:10,color:"white",fontWeight:600,}} >Vendors</Text> 
                          </View>

                    </View>
                    <View style={styles.stock} >
                          <View style={{width:64,height:62,}}>
                             <Image style={{marginLeft:15,}}source={require("../../assets/chart_vert.png")}/> 
                             <Text style={{fontSize:20,color:"white",fontWeight:600,}} >R$9mil</Text> 
                             <Text style={{fontSize:10,color:"white",textAlign:"center",fontWeight:600,}} >Stocks</Text> 
                          </View>   
                    </View>
                  </View>
                  <View style={styles.postContainer}>
                        <View style={styles.heading}>
                          <Text style={{fontSize:20,fontWeight:"600",}}>Recent posts</Text>
                          <Text style={{fontSize:16,fontWeight:"600", marginLeft:110,}}>see more</Text>
                          <TouchableOpacity style={styles.postIcon} >
                          <Image style={{}}source={require("../../assets/post_icon.png")}/>
                          </TouchableOpacity>
                        </View>

                        <View style={styles.postCol}>
                            <View style={styles.imgBox}>
                            <Image   source={require("../../assets/post1.png")}/></View>
                            <View  style={{width:150,marginRight:50,}} >
                            <Text style={styles.name}>Ciciano </Text>
                            <Text style={styles.post}>Assunto..</Text></View>
                            <Text style={{fontSize:14,fontWeight:'600',height:18,marginRight:30,}}>1hr</Text>
                        </View>
                        <View style={styles.postCol}>
                            <View style={styles.imgBox}>
                            <Image   source={require("../../assets/post2.png")}/></View>
                            <View  style={{width:150,marginRight:50,}} >
                            <Text style={styles.name}>Beltrano </Text>
                            <Text style={styles.post}>Assunto..</Text></View>
                            <Text style={{fontSize:14,fontWeight:'600',height:18,marginRight:30,}}>3hr</Text>
                        </View>
                    </View>          
            </View>
                         
            


   </View>
  )
}

export default Home
