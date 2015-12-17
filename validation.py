#!/usr/bin/env python
# -*- coding:utf-8 -*-
import numpy as np
from sklearn import svm, grid_search, cross_validation, neighbors
import matplotlib
matplotlib.use('Agg')
import pylab
import matplotlib.pyplot as plt
import time

def main():
    bench = np.loadtxt('./data/training_firefox.txt', delimiter = '\t')
    X = [[x[1]] for x in bench]
    y = [int(x[0]) for x in bench]
    # param_grid = {'C':10. ** np.arange(-3,4)}
    clf = svm.SVC(kernel='linear').fit(X, y)
    # clf1 = grid_search.GridSearchCV(svc, param_grid = param_grid)
    loo = cross_validation.LeaveOneOut(len(y))
    scores = cross_validation.cross_val_score(clf, X, y, cv=loo, n_jobs=-1)
    print scores
    print("Accuracy: %0.2f (+/- %0.2f)" % (scores.mean(), scores.std()))

    s = int(time.time() * 1000)
    clf.predict(X)
    print int(time.time() * 1000) - s

if __name__ == '__main__':
    main()
