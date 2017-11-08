import { Horizon } from './rdb-service.manager';
import { Injectable } from '@angular/core';

@Injectable()
export class RdbClientService{
    constructor(private hz: Horizon){}
    getAll(collection){
        return this.hz(collection);
    }

    updateOrInsert(collection, docWithId){
        return this.hz(collection).upsert(docWithId);
    }

    insert(collection, doc){
        return this.hz(collection).store(doc);
    }

    fetch(collection){
        return this.hz(collection).fetch();
    }

    watch(collection){
        return this.hz(collection).watch();
    }
}