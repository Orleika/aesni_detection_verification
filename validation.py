#!/usr/bin/env python
# -*- coding:utf-8 -*-
import numpy as np
from sklearn import svm, grid_search, cross_validation

def main():
    bench = np.loadtxt('./data/training_chrome.txt', delimiter = '\t')
    data_train = [[x[1]] for x in bench]
    label_train = [int(x[0]) for x in bench]
    param_grid = {'C':10. ** np.arange(-3,4)}
    svc = svm.SVC(kernel='linear')
    clf = grid_search.GridSearchCV(svc, param_grid = param_grid)
    clf.fit(data_train, label_train)
    print clf.best_score_
    loo = cross_validation.LeaveOneOut(len(label_train))
    # skf = StratifiedKFold(label_train, 2)
    scores = cross_validation.cross_val_score(svc, data_train, label_train, cv=loo, n_jobs=-1)
    print np.average(np.array(scores))

if __name__ == '__main__':
    main()
