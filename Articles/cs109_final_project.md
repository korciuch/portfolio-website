# Conditional Expectation of 4x4 Boggle
### By Kyle Orciuch & Max Lau
![Demo Graph](./Images/demo-graph.png)

### Introduction

Given that a Boggle board has the condition where i.e. {{'a': 1}, {'b': 0}, … , {'y': 0}, {'z': 1}} is the dice-face character frequency map, what is the conditional expected score based on 650k+ Boggle game simulations? We&#39;ll start by explaining how we randomly set up the board for each simulated game, and then we'll show how we generated our simulated data. The following list of 16 uppercase strings represents the 6-sided dice that will be randomly shuffled:

> #### cubes = [&#39;AAEEGN&#39;, &#39;ABBJOO&#39;, &#39;ACHOPS&#39;, &#39;AFFKPS&#39;, &#39;AOOTTW&#39;, &#39;CIMOTU&#39;, &#39;DEILRX&#39;, &#39;DELRVY&#39;, &#39;DISTTY&#39;, &#39;EEGHNW&#39;, &#39;EEINSU&#39;, &#39;EHRTVW&#39;, &#39;EIOSST&#39;, &#39;ELRTTY&#39;, &#39;HIMNQU&#39;, &#39;HLNNRZ&#39;]

We will assume that the 16 dice can be placed into each grid position with equal probability (0.0625) and that the random selection of each die face will occur with equal probability as well (0.167). The board is represented as a 4x4 two dimensional array that looks like this:

> #### \{\{O, O, O, S\}, \{R, R, E, T\}, \{M, T, C, L\}, \{N, E, S, E\}\}

After the board has been randomly generated, we call our recursive backtracking function to conduct a depth-first search to exhaustively find all possible words that are greater or equal to length 3 and are found in the provided dictionary. Any 'scratch' substrings that are not dictionary prefixes are pruned in the base case to increase efficiency. My gameplay code is in a private repo because that part is a previous CS 106B assignment (available upon request). Here is a snippet of a log file, log_kyle1.txt: 

```
1
{{'I', 'I', 'I', 'R'}, {'M', 'E', 'W', 'A'}, {'E', 'P', 'O', 'B'}, {'N', 'P', 'T', 'T'}}
{"ABO", "AIR", "AWE", "AWEE", "BAR", "BOA", "BOAR", "BOP", "BOT", "BOTT", "BOW", "EME", "IMP", "MEN", "MEOW", "MEW", "NEE", "NEEM", "NEEP", "OAR", "OPE", "OPEN", "OPT", "OWE", "PEE", "PEEN", "PEEP", "PEN", "PEP", "PEPO", "PEW", "POEM", "POP", "POPE", "POT", "POW", "RAW", "RIA", "TOE", "TOP", "TOPE", "TOPEE", "TOT", "TOW", "TOWIE", "WAB", "WAIR", "WAR", "WEE", "WEEN", "WEEP", "WEIR", "WEPT", "WIMP", "WOE", "WOP", "WOT"}
number of words: 57
score: 59
129
{{'N', 'T', 'F', 'R'}, {'E', 'O', 'G', 'U'}, {'O', 'I', 'E', 'E'}, {'E', 'C', 'T', 'T'}}
{"CEE", "CETE", "CION", "CITE", "COO", "COOEE", "COOF", "COON", "COOT", "EGO", "EON", "ETIC", "FOE", "FOG", "FOGIE", "FON", "FONT", "FRUG", "FUG", "FUGIO", "FUR", "GEE", "GET", "GIE", "GIEN", "GIT", "GONE", "GOO", "GOT", "GRUE", "ICE", "ION", "NET", "NOETIC", "NOG", "NOO", "NOT", "NOTE", "OCTET", "OFT", "OFTEN", "OGEE", "ONE", "OOT", "RUE", "RUG", "TEE", "TEG", "TEN", "TET", "TIC", "TIE", "TIGON", "TOE", "TOFU", "TOG", "TOGUE", "TOIT", "TON", "TONE", "TOO", "URGE"}
number of words: 62
score: 71
257
{{'A', 'I', 'Z', 'F'}, {'H', 'H', 'O', 'I'}, {'O', 'A', 'M', 'M'}, {'R', 'L', 'E', 'Y'}}
{"AHA", "ALE", "ALME", "ALOHA", "AMI", "AMMO", "EAR", "EARL", "ELM", "ELMY", "FIZ", "FOAL", "FOAM", "FOAMY", "FOH", "HAE", "HAEM", "HAH", "HAHA", "HALE", "HALM", "HALO", "HAM", "HAME", "HAMMY", "HAO", "HAOLE", "HARL", "HMM", "HOAR", "HOLE", "HOLEY", "HOLM", "HOM", "HOME", "HOMEY", "HOMY", "HORA", "HORAH", "HORAL", "IMMY", "LAM", "LAME", "LAR", "LEA", "LEAR", "LEMMA", "LEY", "LOAM", "LOAMY", "MAE", "MALE", "MAR", "MARL", "MEAL", "MEL", "MEM", "MEMO", "MHO", "MIM", "MIME", "MOA", "MOM", "MOME", "MOMI", "OAR", "OHIA", "OHM", "OHO", "OLE", "OLEA", "ORA", "ORAL", "ORLE", "RAH", "RALE", "RAM", "RAMI", "RAMMY", "ROAM", "ROLE", "YEA", "YEAH", "YEAR", "ZOA"}
number of words: 85
score: 96
385
{{'A', 'I', 'S', 'E'}, {'R', 'Z', 'E', 'O'}, {'U', 'I', 'A', 'G'}, {'C', 'Y', 'S', 'F'}}
{"AGE", "AGEE", "AGES", "AGO", "AIR", "AIS", "ARIA", "ARIAS", "ARISE", "AYS", "CIAO", "CIS", "CUR", "CURIA", "CURIAE", "CURIE", "CURIES", "EASY", "EGO", "EGOS", "FAG", "FAGS", "FAIR", "FAIRIES", "FAS", "FAY", "FAYS", "FAZE", "FAZES", "GAE", "GAES", "GAS", "GAY", "GAYS", "GAZE", "GAZES", "GEE", "GEES", "GOA", "GOAS", "GOES", "ICY", "IRIS", "IZAR", "OAF", "OAFS", "OES", "OGEE", "OGEES", "OSE", "RAISE", "RAZE", "RAZEE", "RAZEES", "RAZES", "RIA", "RIAS", "RIES", "RISE", "SAE", "SAG", "SAGE", "SAGES", "SAGO", "SAGOS", "SAY", "SEA", "SEAS", "SEE", "SEG", "SEGO", "SEGS", "SEI", "SEIS", "SIC", "SIES", "SIR", "SIZAR", "SIZE", "SIZES", "URIC", "ZAG", "ZAGS", "ZEE", "ZEES"}
number of words: 85
score: 109
...
```

As our simulated games are completed, we send our results to a .txt log file to store our results for future use (~500 mb worth). Since linear runtime was pretty expensive, we chose to utilize a multithreaded simulator in C++ using a Threadpool class.  This was an acceptable solution because of the variability of the time it took for each board to be solved.  Essentially, the workers that got the easiest board would write to their respective file first and execute their thunk the quickest, instead of waiting sequentially for bottlenecks to clear up. Then, we parse the data from 128 different log files and load it into memory using Python for analysis.

### Data Generation (C++)

```
#include <string>
#include <fstream>
#include <sstream>
#include <iostream>

#include "set.h"
#include "mutex"
#include "grid.h"
#include "boggle.h"
#include "ThreadPool.h"

using namespace std;

static int NUM_GAMES = 1000000;
static int NUM_WORKERS = 128;

int main() {
    Lexicon dictionary(DICTIONARY_FILE);
    ThreadPool pool(NUM_WORKERS);
    mutex fileLocks[NUM_FILES];
    for(int i = 0; i < NUM_GAMES; i++){
        totalCount++;
        pool.enqueue([&dictionary, &fileLocks, i]{
            // simulate one boggle game
            Grid<char> board;
            int computerScore = 0;
            board = generateBoardRandomly();
            Set<string> computerWords = computerWordSearch(board, dictionary);
            computerTurnFeedback(computerWords, computerScore);

            // use ostream friends to push game objects into stringstream 
            stringstream newString;
            newString << board << endl;
            newString << computerWords << endl;
            newString << "number of words: " << computerWords.size() << endl;
            newString << "score: " << to_string(computerScore) << endl;
            string tmpstr = to_string(i) + "\n" + newString.str();

            // write to particular file and update console status
            ofstream myfile;
            fileLocks[i % NUM_FILES].lock();
            myfile.open("res/log_kyle" + to_string(i % NUM_FILES) + ".txt", std::ios_base::app);
            myfile << tmpstr;
            myfile.close();
            fileLocks[i % NUM_FILES].unlock();
            cout << oslock << "\r Status: " << to_string((double)i / NUM_GAMES * 100.0) << "%" << endl << osunlock;
        });
    }
    return 0;
}
```

### Data Parsing (Python)

```
def parse_data(filepath):
    output = {}
    counter, game_id = 0
    for a in range(0, 128):
        currfile = "./res/log_files/log_kyle" + str(a) + ".txt"
        print(currfile)
        with open(currfile, encoding='utf8') as f:
            print(counter)
            for line in f:
                if counter % 5 == 0: # 1st line - game id #
                    output[int(line)] = {}
                    game_id = int(line)
                elif counter % 5 == 1: # 2nd line - boggle board string
                    for char in line:
                        if char.isalpha():
                            output[game_id][char] = output[game_id].get(char, 0) + 1
                elif counter % 5 == 2: # 3rd line - word list 
                    strs = re.split("[{',} \"]", line)
                    words = []
                    for w in strs:
                        if w.isalpha():
                            words.append(w)
                    output[game_id]['words'] = words
                elif counter % 5 == 3: # 4th - number of words
                    strs = re.split(': ', line)
                    output[game_id]['numwords'] = int(strs[1])
                else: # 5th line - game score 
                    strs = re.split(': ', line)
                    output[game_id]['score'] = int(strs[1])
                counter += 1
            del output[game_id]
    return output
```

### Console Program

```
from pip._vendor.distlib.compat import raw_input

def user_query(parsed_data):
    print('***********************************')
    print('Welcome to the Boggle Board Bash')
    print('Sample usage: aab = all boards with 2 A\'s and 1 B.')
    print('Type plot to plot all queries.')
    print('Type * to quit at any time. \n')

    while True: # allows usr to make mult polygrphs
        counter = 0
        lines = []
        queries = []
        queries_res = []
        print('Start? (y/n) / Run CSV Export (=>)')
        user_input_init = raw_input()
        if user_input_init.strip() == "n" or user_input_init.strip() == "*":
            break
        if user_input_init.strip() == "=>":
            export_to_csv(parsed_data)
            break
        while True: # allows usr to populate polygrph with mult queries
            print('Enter query here (plot when ready): ')
            user_input = raw_input()
            if user_input.strip() == "plot" or user_input.strip() == "*":
                break
            lines.append(user_input.upper())
            usr_dict = {}
            for char in lines[counter]:
                if char.isalpha():
                    usr_dict[char] = usr_dict.get(char, 0) + 1
            result = search(parsed_data, usr_dict)
            if np.mean(result) != 0:
                queries_res.append(result)
                queries.append(usr_dict)
            counter += 1
        print('plotting... \n' + '(close pop-up window when done to continue)')
        plot(queries_res, queries)
```
### Search

```
import numpy as np

def search(output, usr_dict) -> []:
    scores = []
    num_event = 0
    for key in output:
        game_dict = output[key]
        event = True
        for usr_key in usr_dict:
            if usr_dict.get(usr_key) != game_dict.get(usr_key, 0):
                event = False
                break
        if event == True:
            num_event += 1
            scores.append((game_dict["score"]))
    print('Number of boards with condition: ', num_event)
    print('Expected Score: ', np.mean(scores))
    return scores
```

### Sub-Plotting
```
import math
import numpy as np
import seaborn as sns
import scipy.stats as sps
import matplotlib.pyplot as plt

def plot(queries_res, queries):
    plt.style.use('seaborn')
    sns.set(style='ticks')

    arrays = []
    numbins = 50
    for i in range(0, len(queries_res)): # plot all histograms
        if len(arrays[i]) < 500: numbins = 10
        elif len(arrays[i]) < 100: numbins = 5
        arrays.append(np.array(queries_res[i]))
        plt.hist(arrays[i], 50, range=[-10, 500], histtype='bar', density=True, alpha=0.5,
            label=str(queries[i]))

    mn, mx = plt.xlim()
    plt.xlim(mn, mx)
    x = np.linspace(mn, mx, 300)

    for i in range(0, len(arrays)): # plot all estimated PDF curves 
        kde = sps.gaussian_kde(arrays[i])
        plt.plot(x, kde.pdf(x), ls='--', label=str(queries[i]) + " - " +
            "\u03BC: " + str(round(np.mean(queries_res[i]), 3)) +
            " \u03C3: " + str(round(math.pow(np.var(queries_res[i]), 0.5), 3)))

    plt.legend()
    plt.ylabel('Probability density')
    plt.xlabel('Score (pts.)')
    sns.despine()
    plt.show()
```

### Example Output

```
Welcome to the Boggle Board Bash
Sample usage: aab = all boards with 2 A's and 1 B.
Type plot to plot all queries.
Type * to quit at any time. 

Start? (y/n) / Run CSV Export (=>)
y
Enter query here (plot when ready): 
rst
Number of boards with condition:  39749
Expected Score:  158.42008603990038
Enter query here (plot when ready): 
ijk
Number of boards with condition:  7184
Expected Score:  101.91536748329621
Enter query here (plot when ready): 

Number of boards with condition:  643902
Expected Score:  136.35417190814752
Enter query here (plot when ready): 
plot 
plotting... 
(close pop-up window when done to continue)
```

![Usage Graph](./Images/usage-graph.png)

### Results

```
import csv

def export_to_csv(parsed_data):
    alphabet = list(string.ascii_uppercase)
    max_frequency = 6
    with open('./res/alpha_stats.csv', mode='w') as alpha_stats_file:
        alpha_stats_writer = csv.writer(alpha_stats_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        for i in range(0, max_frequency):
            row = []
            for a in range(0, len(alphabet)):
                usr_dict = {}
                for char in alphabet[a]:
                    usr_dict[char] = usr_dict.get(char, 0) + 1

                result = search(parsed_data, usr_dict)
                row.append(str(round(np.mean(result), 2)))
                alphabet[a] += alphabet[a][0]

            alpha_stats_writer.writerow(row)
```

### CSV

```
143.26,130.82,133.4,140.86,126.75,121.37,126.83,137.44,142.35,110.35,121.08,141.89,139.72,142.42,139.77,137.02,110.74,147.5,145.12,141.12,132.61,120.48,129.38,107.14,126.21,107.55
154.95,0.0,116.03,132.94,149.97,0.0,103.84,121.03,135.86,0.0,0.0,140.75,131.89,138.19,139.72,124.27,0.0,158.66,166.09,144.18,117.96,96.3,106.9,0.0,100.59,0.0
151.23,0.0,0.0,117.52,156.68,0.0,0.0,100.81,119.34,0.0,0.0,131.81,0.0,123.27,129.93,0.0,0.0,154.94,164.96,132.82,99.93,0.0,83.75,0.0,78.3,0.0
138.02,0.0,0.0,0.0,148.08,0.0,0.0,82.57,97.18,0.0,0.0,117.08,0.0,103.1,114.21,0.0,0.0,140.14,149.7,115.38,0.0,0.0,0.0,0.0,0.0,0.0
110.14,0.0,0.0,0.0,127.54,0.0,0.0,61.27,81.52,0.0,0.0,0.0,0.0,76.79,91.89,0.0,0.0,115.87,129.52,92.17,0.0,0.0,0.0,0.0,0.0,0.0
0.0,0.0,0.0,0.0,101.91,0.0,0.0,0.0,51.14,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,68.99,0.0,0.0,0.0,0.0,0.0,0.0
```

### Character Frequency vs Diminishing Utility

[iframe](https://docs.google.com/spreadsheets/d/e/2PACX-1vSKwFjaOy96OWYrkGPtjnI2FKiAdEpvY-V6zrsQz1E1j5Yd8oQtiFY7hE9HTtFwgRWaTCVQeci_IeiM/pubchart?oid=1490386963&amp;format=interactive)

### Conclusion

The expected value for most of the distributions we encountered were shaped like right-tailed Poisson; however, once we started probing into high scoring boards where the sample size decreased significantly, the distributions looked like normal bell curves. One of the key observations is the fact that only 5 letters experienced increases in expected board score during some interval when their frequency increased: \{a, e, r, s, t\}. From this list, only the vowel 'e' managed to post a second increase in expected score when encountered on a board three times - the others, \{a, r, s, t\}, only increased on the interval \[1, 2\].  The remaining alphabet decreased expected score with increasing frequency for the interval \[1, 6\], and posted lower expected scores on all intervals comparing to those of the above set. In conclusion, if you want the greatest chance of getting a high scoring board, you'll want a board of which contains the frequency argmax of each of the 'high-rollers' \{a, e, r, s, t\}, which we can demonstrate using our python program. 

```
***********************************
Welcome to the Boggle Board Bash
Sample usage: aab = all boards with 2 A's and 1 B.
Type plot to plot all queries.
Type * to quit at any time. 

Start? (y/n) / Run CSV Export (=>)
y
Enter query here (plot when ready): 
aa  
Number of boards with condition:  132422
Expected Score:  154.95396535318903
Enter query here (plot when ready): 
aaeee
Number of boards with condition:  21416
Expected Score:  175.62612065745236
Enter query here (plot when ready): 
aaeeerr
Number of boards with condition:  2722
Expected Score:  224.64474650991917
Enter query here (plot when ready): 
aaeeerrss
Number of boards with condition:  389
Expected Score:  308.08997429305913
Enter query here (plot when ready): 
aaeeerrsstt
Number of boards with condition:  68
Expected Score:  387.6617647058824
Enter query here (plot when ready): 
plot
plotting... 
```

![Conclusion Graph](./Images/conclusion-graph.png)
