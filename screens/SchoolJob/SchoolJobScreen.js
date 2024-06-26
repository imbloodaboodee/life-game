import React, { useContext } from 'react';
import { View, Button, Image, StyleSheet, Text, Pressable } from 'react-native';
import GameBar from '../../components/ui/GameBar';
import IconButton from '../../components/ui/IconButton';
import { ScrollView } from 'react-native-gesture-handler';
import { UserContext } from '../../store/UserContext';
import Avatar from '../../components/ui/Avatar';
const SchoolJobScreen = ({ navigation }) => {
    const {  department, job, grade, currentStatus, performance, skipClass, studyHarder, workHarder, quitJob } = useContext(UserContext);


    const getCurrentStatusText = () => {
        switch (currentStatus) {
            case 'infant':
                return 'Infant';
            case 'student':
                return 'Student';
            case 'uniStudent':
                return `Hanoi University - ${department.name}`;
            case 'employed':
                return `Full-time ${job}`; 
            case 'unemployed':
                return 'Unemployed';
            default:
                return currentStatus;
        }
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.topRow}>
                    <View style={styles.avatar}>
                        <Avatar
                            
                            onPress={() => navigation.navigate("PlayerStatsScreen")}
                        />
                    </View>
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 0, padding: 0, color: 'black' }}>Current Status: </Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 0, padding: 0, color: 'black', textAlign: 'center' }}>{getCurrentStatusText()} </Text>

                    </View>
                </View>
                {currentStatus === 'student' && (
                    <View style={styles.mainView}>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('SubjectListScreen') }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../icon/Study.png')}
                                    style={{ width: 40, height: 40, marginRight: 10, marginBottom: 5 }}
                                />
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Overall Grade</Text>
                            </View>
                            <GameBar progress={grade} color={'#5E17EB'} height={10} borderRadius={5} />
                        </Pressable>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('ParttimeJobListScreen') }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../icon/boiban.png')}
                                    style={{ width: 40, height: 40, marginRight: 10, marginBottom: 5 }}
                                />
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Part-time Jobs</Text>
                            </View>
                        </Pressable>
                        <View style={styles.functionButton}>
                            <IconButton icon={'sad'} size={50} color={'black'} text={'Skip class'} onPress={skipClass} />
                        </View>
                    </View>
                )}
                {currentStatus === 'uniStudent' && (
                    <View style={styles.mainView}>
                        <View style={styles.gradeBar}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../icon/Memo.png')} 
                                    style={{ width: 40, height: 40, marginRight: 10, marginBottom: 5 }}
                                />
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Overall Grade</Text>
                            </View>
                            <GameBar progress={grade} color={'#5E17EB'} height={10} borderRadius={5} />
                        </View>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('ParttimeJobListScreen') }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../icon/boiban.png')} 
                                    style={{ width: 40, height: 40, marginRight: 10, marginBottom: 5 }}
                                />
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Part-time Jobs</Text>
                            </View>
                        </Pressable>
                        <View style={styles.functionButton}>
                            <IconButton icon={'happy'} size={50} color={'black'} text={'Skip class'} onPress={skipClass} />
                        </View>
                        <View style={styles.functionButton}>
                            <IconButton icon={'sad'} size={50} color={'black'} text={'Study Harder'} onPress={studyHarder} />
                        </View>
                    </View>
                )}
                {currentStatus === 'unemployed' && (
                    <View style={styles.mainView}>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('ParttimeJobListScreen') }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../icon/Constructor.png')} 
                                    style={{ width: 40, height: 40, marginRight: 10, marginBottom: 5 }}
                                />
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Part-time jobs</Text>
                            </View>
                        </Pressable>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('FulltimeJobListScreen') }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../icon/congviec.png')}
                                    style={{ width: 40, height: 40, marginRight: 10, marginBottom: 5 }}
                                />
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Full Time Job</Text>
                            </View>
                        </Pressable>
                    </View>
                )}
                {currentStatus === 'employed' && (
                    <View style={styles.mainView}>
                        <View style={styles.gradeBar}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../icon/Fire.png')} 
                                    style={{ width: 40, height: 40, marginRight: 10, marginBottom: 5 }}
                                />
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Performance</Text>
                            </View>
                            <GameBar progress={performance} color={'#5E17EB'} height={10} borderRadius={5} />
                        </View>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('ParttimeJobListScreen') }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../icon/Constructor.png')} 
                                    style={{ width: 40, height: 40, marginRight: 10, marginBottom: 5 }}
                                />
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Part-time jobs</Text>
                            </View>
                        </Pressable>
                        <View style={styles.functionButton}>
                            <IconButton icon={'briefcase'} size={50} color={'black'} text={'Work Harder'} onPress={workHarder} />
                        </View>
                        <View style={styles.functionButton}>
                            <IconButton icon={'close'} size={50} color={'black'} text={'Quit Job'} onPress={quitJob} />
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        marginTop: 10,
    },
    topRow: {
        width: '80%',
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#F8FFE3',
        borderRadius: 20,
        borderWidth: 2,
    },
    avatar: {
        margin: 30,
        marginLeft: 20,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 40,
    },
    mainView: {
        width: '90%',
        borderRadius: 20,
        margin: 30,
    },
    gradeBar: {
        margin: 15,
        fontSize: 14,
        fontWeight: '200',
        backgroundColor: '#FFF379',
        padding: 23,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
    },
    functionButton: {
        backgroundColor: '#F8FFE3',
        borderRadius: 20,
        margin: 30,
        borderColor: 'black',
        borderWidth: 2,

    },
});

export default SchoolJobScreen;