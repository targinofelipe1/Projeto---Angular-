// import { Injectable } from '@angular/core';
// import {from, Observable } from 'rxjs';
// import {
//   AngularFirestore,
//   AngularFirestoreCollection,
// } from '@angular/fire/compat/firestore';
// import { Produto } from '../model/produto';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProdutosFirebaseService {
//   colecaoProdutos: AngularFirestoreCollection<Produto>;
//   NOME_COLECAO = 'Produtos';

//   constructor(private afs: AngularFirestore) {
//     this.colecaoProdutos = afs.collection(this.NOME_COLECAO);
//   }

//   inserir(novoProduto: Produto): Observable<Produto> {
//      delete novoProduto.id;
//      return from(this.colecaoProdutos.add({ ...novoProduto }));
//   }

//   // apagar(idParaRemocao: string): Observable<void> {
//   //   return from(this.colecaoProdutos.doc(idParaRemocao).delete());
//   // }

//   // pesquisarPorId(id: string): Observable<Prestador> {
//   //   return this.colecaoProdutos.doc(id).get()
//   //     .pipe(map(document => new Prestador(document.id, document.data())));
//   // }

//   // atualizar(prestador: Prestador): Observable<void> {
//   //   const id = prestador.id;
//   //   delete prestador.id;

//   //   return from(this.colecaoProdutos.doc(id)
//   //     .update(Object.assign({}, prestador)));
//   // }

//   listar(): Observable<Produto[]> {
//     return this.colecaoProdutos.valueChanges({ idField: 'id' });
//   }
// }


