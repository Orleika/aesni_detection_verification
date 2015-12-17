#!/usr/bin/env python
# -*- coding:utf-8 -*-

from pymongo import MongoClient
import numpy as np
import time
from datetime import datetime
import httpagentparser

def main():
    client = MongoClient()
    db = client.aes

    t = []
    for data in db.origin.find():
        if httpagentparser.detect(data['http_User-Agent'])['browser']['name'] == 'Microsoft Internet Explorer':
            t1 = time.mktime(time.strptime(data['1stUpdate'], '%Y-%m-%d %H:%M:%S'))
            t2 = time.mktime(time.strptime(data['2ndUpdate'], '%Y-%m-%d %H:%M:%S'))
            t.append(t2 - t1)

    print t
    result = np.array(t)
    print("ave: %0.2f (+/- %0.2f)" % (np.average(result), np.std(result)))
    print np.max(result)

if __name__ == '__main__':
    main()
