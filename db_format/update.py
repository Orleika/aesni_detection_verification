#!/usr/bin/env python
# -*- coding:utf-8 -*-

# update turbo boost on/off

from pymongo import MongoClient

def main():
    client = MongoClient()
    db = client.aes
    for data in db.lancers.find():
        model = db.cpu.find_one({"model": data['model']})
        if model.has_key('tb'):
            db.lancers.update_one({'_id': data['_id']}, {'$set': {'tb': model['tb']}})
        else:
            db.lancers.delete_one({'_id': data['_id']})

if __name__ == '__main__':
    main()
