using task as my from '../db/data-model';

service CatalogService {
     @odata.draft.enabled
     entity table as projection on my.table;
}

