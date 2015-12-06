#!/usr/bin/env python
# -*- coding:utf-8 -*-

import numpy as np
import json
from pymongo import MongoClient
import httpagentparser

def main():
    client = MongoClient()
    db = client.aes
    result = []

    for data in db.lancers.find():
        row = '\t'.join([data['http_User-Agent'], httpagentparser.detect(data['http_User-Agent'])['browser']['name'], httpagentparser.detect(data['http_User-Agent'])['browser']['version'], httpagentparser.detect(data['http_User-Agent'])['os']['name'], str(data['aesni']), str(data['model']), str(np.average(np.array([float(x) for x in data['aes'].split(',')]))), str(np.average(np.array([float(x) for x in data['montecarlo'].split(',')])))]) + '\n'
        result.append(row.encode('utf8'))

    f = open('./dump.txt', 'w')
    f.writelines(result)
    f.close()

if __name__ == '__main__':
    main()
