//    blog.edafait.com
//    www.edafait.com
// Screen to view all the user*/

import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const ViewAllUser = () => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setFlatListItems(temp);
      });
    });
  }, []);

  let listViewItemSeparator = () => {
    return (
      <View
        style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }}
      />
    );
  };

  let listItemView = (item) => {
    return (
      <View
        key={item.user_id}
        style={{ backgroundColor: 'white', padding: 20 }}>
        <Text>Id: {item.user_id}</Text>
        <Text>Name: {item.user_name}</Text>
        <Text>Contact: {item.user_contact}</Text>
        <Text>Address: {item.user_address}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
     <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          www.edafait.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ViewAllUser;
