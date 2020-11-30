import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

export default function sidebar() {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      // create new item
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>🔥</strong>)
        .child(
          S.editor()
            .schemaType('storeSettings')
            // make new document id
            .documentId('downtown')
        ),
      // add in the rest of document items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
