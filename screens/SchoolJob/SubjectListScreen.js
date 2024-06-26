import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import GameBar from '../../components/ui/GameBar';
import IconButton from '../../components/ui/IconButton';
import { UserContext } from '../../store/UserContext';

const SubjectListScreen = () => {
    const { currentStatus, study, grade } = useContext(UserContext);

    const subjects = [
        'Math',
        'Literature',
        'Science',
        'History',
        'Geography',
        'Art',
        'Information Technology',
        'Physical Education',
        'Foreign Language',
    ];

    return (
        <View style={styles.container}>
            {currentStatus === 'student' ? (
                <>
                    <View style={styles.gradeBar}>
                        <Text style={styles.gradeText}>Overall Grade</Text>
                        <GameBar progress={grade} color={'green'} height={10} borderRadius={5} />
                    </View>
                    <FlatList
                        data={subjects}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text style={styles.title}>{item}</Text>
                                <IconButton icon={'book'} size={30} text={'Study'} onPress={() => study(item)} style={styles.button} />
                            </View>
                        )}
                        keyExtractor={(item) => item}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        showsVerticalScrollIndicator={false}
                    />
                </>
            ) : (
                <Text style={styles.notStudentText}>You're not a student anymore</Text>
            )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        paddingTop: 20,
    },
    gradeBar: {
        marginHorizontal: 20,
        marginBottom: 20,
        padding: 20,
        backgroundColor: '#e6e6fa',
        borderRadius: 10,
        borderWidth: 2,
        marginTop: 10,
    },
    gradeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF379',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        borderWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: '#333',
    },
    button: {
        backgroundColor: '#add8e6', 
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
    },
    notStudentText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default SubjectListScreen;
