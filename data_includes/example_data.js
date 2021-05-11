var images = ["10BD.jpg","10BS.jpg","10OD.jpg","10OS.jpg","11BD.jpg","11BS.jpg","11OD.jpg","11OS.jpg","12BD.jpg","12BS.jpg","12OD.jpg","12OS.jpg","13BD.jpg","13BS.jpg","13OD.jpg","13OS.jpg","14BD.jpg","14BS.jpg","14OD.jpg","14OS.jpg","15BD.jpg","15BS.jpg","15OD.jpg","15OS.jpg","16BD.jpg","16BS.jpg","16OD.jpg","16OS.jpg","17BD.jpg","17BS.jpg","17OD.jpg","17OS.jpg","18BD.jpg","18BS.jpg","18OD.jpg","18OS.jpg","19BD.jpg","19BS.jpg","19OD.jpg","19OS.jpg","1BD.jpg","1BS.jpg","1OD.jpg","1OS.jpg","20BD.jpg","20BS.jpg","20OD.jpg","20OS.jpg","21BD.jpg","21BS.jpg","21OD.jpg","21OS.jpg","22BD.jpg","22BS.jpg","22OD.jpg","22OS.jpg","23BD.jpg","23BS.jpg","23OD.jpg","23OS.jpg","24BD.jpg","24BS.jpg","24OD.jpg","24OS.jpg","25BD.jpg","25BS.jpg","25OD.jpg","25OS.jpg","26BD.jpg","26BS.jpg","26OD.jpg","26OS.jpg","27BD.jpg","27BS.jpg","27OD.jpg","27OS.jpg","28BD.jpg","28BS.jpg","28OD.jpg","28OS.jpg","29BD.jpg","29BS.jpg","29OD.jpg","29OS.jpg","2BD.jpg","2BS.jpg","2OD.jpg","2OS.jpg","30BD.jpg","30BS.jpg","30OD.jpg","30OS.jpg","31BD.jpg","31BS.jpg","31OD.jpg","31OS.jpg","32BD.jpg","32BS.jpg","32OD.jpg","32OS.jpg","33BD.jpg","33BS.jpg","33OD.jpg","33OS.jpg","34BD.jpg","34BS.jpg","34OD.jpg","34OS.jpg","35BD.jpg","35BS.jpg","35OD.jpg","35OS.jpg","36BD.jpg","36BS.jpg","36OD.jpg","36OS.jpg","37BD.jpg","37BS.jpg","37OD.jpg","37OS.jpg","38BD.jpg","38BS.jpg","38OD.jpg","38OS.jpg","39BD.jpg","39BS.jpg","39OD.jpg","39OS.jpg","3BD.jpg","3BS.jpg","3OD.jpg","3OS.jpg","40BD.jpg","40BS.jpg","40OD.jpg","40OS.jpg","4BD.jpg","4BS.jpg","4OD.jpg","4OS.jpg","5BD.jpg","5BS.jpg","5OD.jpg","5OS.jpg","6BD.jpg","6BS.jpg","6OD.jpg","6OS.jpg","7BD.jpg","7BS.jpg","7OD.jpg","7OS.jpg","8BD.jpg","8BS.jpg","8OD.jpg","8OS.jpg","9BD.jpg","9BS.jpg","9OD.jpg","9OS.jpg"];
for(img of images) {
  var url = "https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/" + img + "?raw=true";
  var obj=new Image();
  obj.src=url;
}

//PennController.DebugOff();

var ParticCondition = Math.floor(Math.random() * 6 + 1);
//generate a random number between 1 and 6 inclusive
/*generates the participant condition.
SEEN CONDITION
1) Colour morphologically realised
2) Texture morphologically realised
UNSEEN CONDITION
Colour morphologically realised
3) value1 in the critical condition
4) value2 in the critical condition
Texture morphologically realised
5) value1 in the critical condition
6) value2 in the critical condition
*/

//shuffle function
function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    
// suffix varies randomly, it is the entity condition that is crucial which is associated with 
// a given participant condition and therefore varied systematically
var suffixes = ["ni", "ko"];
var suffixes2 = shuffle(suffixes);
var s1 = suffixes2[0];
var s2 = suffixes2[1];
//make sure these are logged, find how

//40 base stems

//will properly filter these once we decide on the language
var ws = ['fi', 'du', 're', 'yu', 'we', 'ku', 'mi', 'mu', 'vo', 'pa', 'xu', 'kimu', 'mora', 
'ceno', 'letu', 'sohe', 'fevo', 'mope', 'guxo', 'veta', 'jami', 'momi', 'coto', 
'feti', 'weyi', 'gosa', 'lawu', 'kako', 'xufa', 'gapo', 'hato', 'fera', 'pepu', 'yubi', 
'sobe', 'kiki', 'doli', 'civu', 'yexe', 'jani', 'xege', 'gole']; 
var ws_shuf = shuffle(ws);

//set the constants for each participant condition
if(ParticCondition == 1 || ParticCondition == 3 || ParticCondition == 4){
    var morphReal = "Colour";
    var pic_grouping = [["BD", "BS"],["OD", "OS"]];
} else {
        var morphReal = "Texture";
        var pic_grouping = [["BD", "OD"], ["BS", "OS"]];
    }
    
//set unknown condition for unseen conditions
switch(ParticCondition){
    case 1:
        var unseen_cond = shuffle(pic_grouping.flat())[0];
        break;
    case 2:
        var unseen_cond = shuffle(pic_grouping.flat())[0];
        break;
    case 3:
        var unseen_cond = shuffle(pic_grouping[0])[0];
        break;
    case 4:
        var unseen_cond = shuffle(pic_grouping[1])[0];
        break;
    case 5:
        var unseen_cond = shuffle(pic_grouping[0])[0];
        break;
    case 6:
        var unseen_cond = shuffle(pic_grouping[1])[0];
        break;
}


var all_conds = pic_grouping.flat();
var seen_conds = all_conds.filter(function(el) { return el != unseen_cond; });


//divide testing from training
//all IDs
var pic_id_all = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
var pic_id_all_shuf = shuffle(pic_id_all);
//only 35 IDs (decided to keep entities for which texture was least clear as testing fillers)
var pic_id_training = ['1', '2', '3', '5', '6', '8', '9', '10', '12', '13', '14', '15', '16', '18', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
var pic_id_shuf = shuffle(pic_id_training);
var testing_fillers_only = ["4", "7", "11", "17", "19"];


//dictionary of stem~entity pairs 
var stemEntity = {};
pic_id_all_shuf.forEach((key, i) => stemEntity[key] = ws_shuf[i]);

//create an array of file names for each condition
//check that the way slice works + start countig at 0 gives the right amount of items

//has 35 training entities
var training_conds = {"OD" : shuffle(pic_id_shuf.flatMap(i => i+"OD.jpg")),
"BD" : shuffle(pic_id_shuf.flatMap(i => i+"BD.jpg")),
"OS" : shuffle(pic_id_shuf.flatMap(i => i+"OS.jpg")),
"BS" : shuffle(pic_id_shuf.flatMap(i => i+"BS.jpg"))};

//has all entities (40)
var all_items_conds = {"OD" : shuffle(pic_id_all.flatMap(i => i+"OD.jpg")),
"BD" : shuffle(pic_id_all.flatMap(i => i+"BD.jpg")),
"OS" : shuffle(pic_id_all.flatMap(i => i+"OS.jpg")),
"BS" : shuffle(pic_id_all.flatMap(i => i+"BS.jpg"))};

var all_items_flat = [];
for(var keys in all_items_conds){
   all_items_flat.push(all_items_conds[keys]);
 }
var all_items_flat = all_items_flat.flat();
   
//training filler conds? (do I need this?)


//takes a file name, gets the entity ID, maps it to the stem, adds the suffix.
//this works despite the errors
function mapStem(filename){
    let mappedStem = stemEntity[filename.slice(0,filename.length - 6)];
    let cond = filename.slice(filename.length-6,filename.length - 4);
    if(morphReal == "Colour") {
        if (pic_grouping[0].includes(cond)){
            var suff = s1;
        } else{
            var suff = s2;
        }
    } else {
       if (pic_grouping[0].includes(cond)){
            var suff = s1;
        } else{
            var suff = s2;
        } 
    } return mappedStem+suff;}
    
var testing_seen = [];

for(var cond of seen_conds){
     testing_seen.push(all_items_conds[cond]);
}
var testing_seen = testing_seen.flat();

//set item order for each condition
var seen_n_training = 21;
var unseen_n_training = 28;

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}


//assign training items
switch(ParticCondition){
    case 1:
    case 2:
        var training_pics = shuffle(training_conds.OD.slice(0,seen_n_training)
        .concat(training_conds.BD.slice(0,seen_n_training))
        .concat(training_conds.OS.slice(0,seen_n_training))
        .concat(training_conds.BS.slice(0,seen_n_training)));
        var training_words = training_pics.map(mapStem);
        //make array of word~picture pairs
        var training_items_inter = training_pics.map(function(e, i) {
            return [e, training_words[i]];
            });
        //not all stems might have been shown, check which ones have 
        var seen_stems = [];
        for (var i of training_pics){
            let id = i.slice(0,i.length - 6);
            seen_stems.push(id);
        }
        //the length here will vary a little, do we care?
        var seen_stems = seen_stems.filter(onlyUnique);
        //all potential training items that haven't been used are filtered for those whose entity has been shown at least once
        var leftover_training = training_conds.OD.slice(seen_n_training)
        .concat(training_conds.BD.slice(seen_n_training))
        .concat(training_conds.OS.slice(seen_n_training))
        .concat(training_conds.BS.slice(seen_n_training));
        var leftover_training_seen_stems = [];
        for (var i of leftover_training){
            let id = i.slice(0,i.length - 6);
            if (seen_stems.includes(id)){
                leftover_training_seen_stems.push(i);
            }
        }
        var testing_target_pics = {"unseen": shuffle(leftover_training_seen_stems.filter(str => str.includes(unseen_cond))).slice(0,10),
        "seen_0": shuffle(shuffle(leftover_training_seen_stems.filter(str => str.includes(seen_conds[0])).slice(0,6))
        .concat(shuffle(training_pics.filter(str => str.includes(seen_conds[0])).slice(0,4)))),
        "seen_1":shuffle(shuffle(leftover_training_seen_stems.filter(str => str.includes(seen_conds[1])).slice(0,6))
        .concat(shuffle(training_pics.filter(str => str.includes(seen_conds[1])).slice(0,4)))),
        "seen_2":shuffle(shuffle(leftover_training_seen_stems.filter(str => str.includes(seen_conds[2])).slice(0,6))
        .concat(shuffle(training_pics.filter(str => str.includes(seen_conds[2])).slice(0,4))))
            
        }
        ;
        /*var testing_target_words = testing_target_pic.flatMap(mapStem);
        var testing_target_items = testing_target_pic.flatMap(function(e, i) {
            return [e, testing_target_words[i]];
            });*/

    break;
    case 3:
    case 4:
    case 5:
    case 6:
        var training_pics = shuffle(training_conds[seen_conds[0]].slice(0, unseen_n_training)
        .concat(training_conds[seen_conds[1]].slice(0, unseen_n_training))
        .concat(training_conds[seen_conds[2]].slice(0, unseen_n_training)));
        var training_words = training_pics.map(mapStem);
        var training_items_inter = training_pics.map(function(e, i) {
            return [e, training_words[i]];
            });
        var seen_stems = [];
        for (var i of training_pics){
            let id = i.slice(0,i.length - 6);
            seen_stems.push(id);
        }
        var seen_stems = seen_stems.filter(onlyUnique);
        var leftover_training = training_conds[seen_conds[0]].slice(unseen_n_training)
        .concat(training_conds[seen_conds[1]].slice(unseen_n_training))
        .concat(training_conds[seen_conds[2]].slice(unseen_n_training))
        .concat(training_conds[unseen_cond]);
        var leftover_training_seen_stems = [];
        for (var i of leftover_training){
            let id = i.slice(0,i.length - 6);
            if (seen_stems.includes(id)){
                leftover_training_seen_stems.push(i);
            }
        }
        //for unseen condition, add 10 items of seen stems. For seen conditions add 6 unseen items of seen stems, and 4 seen items of seen stems
        var testing_target_pics = {"unseen": shuffle(leftover_training_seen_stems.filter(str => str.includes(unseen_cond))).slice(0,10),
        "seen_0": shuffle(shuffle(leftover_training_seen_stems.filter(str => str.includes(seen_conds[0])).slice(0,6))
        .concat(shuffle(training_pics.filter(str => str.includes(seen_conds[0])).slice(0,4)))),
        "seen_1":shuffle(shuffle(leftover_training_seen_stems.filter(str => str.includes(seen_conds[1])).slice(0,6))
        .concat(shuffle(training_pics.filter(str => str.includes(seen_conds[1])).slice(0,4)))),
        "seen_2":shuffle(shuffle(leftover_training_seen_stems.filter(str => str.includes(seen_conds[2])).slice(0,6))
        .concat(shuffle(training_pics.filter(str => str.includes(seen_conds[2])).slice(0,4))))
            
        }
        ;
        //flatmap doesn't work on dictionary objects
        /*var testing_target_words = testing_target_pics.flatMap(mapStem);
        var testing_target_items = testing_target_pics.map(function(e, i) {
            return [e, testing_target_words[i]];
            });*/
        
    break;
}
//doubling the number of testing exposures - two cycles of the same training items in a different order
var training_items_2 = training_items_inter.slice(0)
var training_items2 = training_items_2.concat(shuffle(training_items_inter.slice(0)));
var training_items = training_items2.filter(function(){return true;});
//make function for assigning block names to add comprehension trial
var block_dict = {};
var ints = [...Array(168).keys()];
var block_ID = [];
for (var i of [...Array(18).keys()]){
      block_ID.push(Array(10).fill(i));
  }
ints.forEach((key, i) => block_dict[key] = block_ID.flat()[i]);

//takes a nested array, for each subarray (= trial) its index is used to get block membership and append it to the subarray
//these are the issues: because there's two items that have the same values, .push appends to each twice. 
//Length of array is 168, so that's expected. But I am thinking the problem might be .concat not mutating indices (which afaik is not a thing) or something similar?
var ta =  []   
    for (var x in [...Array(168).keys()]){
        ta.push(training_items[x].concat("block_"+block_dict[x]));
    }
var training_items = ta
//comprehension questions identifier
var comp_in_chunk = []
for (var i in [...Array(17).keys()]){
    comp_in_chunk.push(shuffle(["Y","N","N","N","N","N","N","N","N","N"]))
}

for (i in training_items){
    training_items[i].push(comp_in_chunk.flat()[i])
}

//divide in testing conditions

var testing_1corr_pos_f = shuffle(testing_target_pics["unseen"].slice(0,3)
.concat(testing_target_pics["seen_0"].slice(0,3))
.concat(testing_target_pics["seen_1"].slice(0,3))
.concat(testing_target_pics["seen_2"].slice(0,3)));
var testing_1corr_neg_f = shuffle(testing_target_pics["unseen"].slice(3,6)
.concat(testing_target_pics["seen_0"].slice(3,6))
.concat(testing_target_pics["seen_1"].slice(3,6))
.concat(testing_target_pics["seen_2"].slice(3,6)));
var testing_2corr_pos_f = shuffle(testing_target_pics["unseen"].slice(6,8)
.concat(testing_target_pics["seen_0"].slice(6,8))
.concat(testing_target_pics["seen_1"].slice(6,8))
.concat(testing_target_pics["seen_2"].slice(6,8)));
var testing_2corr_neg_f = shuffle(testing_target_pics["unseen"].slice(8)
.concat(testing_target_pics["seen_0"].slice(8))
.concat(testing_target_pics["seen_1"].slice(8))
.concat(testing_target_pics["seen_2"].slice(8)));

var testing_1corr_pos_words = testing_1corr_pos_f.map(mapStem);
var testing_1corr_pos_items = testing_1corr_pos_f.map(function(e, i) {
            return [e, testing_1corr_pos_words[i]];
            });
var testing_1corr_neg_words = testing_1corr_neg_f.map(mapStem);
var testing_1corr_neg_items = testing_1corr_neg_f.map(function(e, i) {
            return [e, testing_1corr_neg_words[i]];
            });
var testing_2corr_pos_words = testing_2corr_pos_f.map(mapStem);
var testing_2corr_pos_items = testing_2corr_pos_f.map(function(e, i) {
            return [e, testing_2corr_pos_words[i]];
            });
var testing_2corr_neg_words = testing_2corr_neg_f.map(mapStem);
var testing_2corr_neg_items = testing_2corr_neg_f.map(function(e, i) {
            return [e, testing_2corr_neg_words[i]];
            });
            
//add decoy pictures. For 1 corr, randomly filled, constraint is that it cannot be the item that is referred to by the same word.
function filler_1corr(arr){
    for (var i of arr){
        var pic = i[0];
        var id = pic.slice(0,pic.length-6);
        var fillers = [];
        //assumption: for 1corr, we don't care if any item, apart from the target, appears in multiple conditions
        while (fillers.length < 5){
            var fil_ = shuffle(all_items_flat)[0];
            if (fil_.slice(0,fil_.length-6) != id){
                fillers.push(fil_)
            }
        }
        i.push(fillers)
        i = i.flat()}
    return arr
}


//find image that is expressed with same word
function find_doublet(i){
    let cond = i.slice(i.length-6,i.length - 4)
    let id = i.slice(0,i.length-6);
    let index_cond = pic_grouping.flat().indexOf(cond)
    switch(index_cond){
        case 0:
            var twin_cond = pic_grouping.flat()[1]
            break;
        case 1:
            var twin_cond = pic_grouping.flat()[0]
            break;
        case 2:
            var twin_cond = pic_grouping.flat()[3]
            break;
        case 3:
            var twin_cond = pic_grouping.flat()[2]
            break;
    }
    return id+twin_cond+".jpg"
}


function filler_2corr(arr){
    for (var i of arr){
        let pic = i[0];
        let id = pic.slice(0,pic.length-6);
        let fillers = [];
        //add doublet
        fillers.push(find_doublet(pic));
        //add two other entities in two conditions, one at random from each pic grouping subarray
        var id_2;
        do{
            id_2 = Math.floor(Math.random() * 40 + 1);
        }while(id_2 == id);
        var id_3;
        do{
            id_3 = Math.floor(Math.random() * 40 + 1);
        }while(id_3 == id || id_3 == id_2);
        fillers.push(id_2+shuffle(pic_grouping[0])[0]+".jpg")
        fillers.push(id_2+shuffle(pic_grouping[1])[0]+".jpg")
        fillers.push(id_3+shuffle(pic_grouping[0])[0]+".jpg")
        fillers.push(id_3+shuffle(pic_grouping[1])[0]+".jpg")
        i.push(fillers);
        i = i.flat()}
   return arr
}    

var testing_1corr_pos_items = filler_1corr(testing_1corr_pos_items);
var testing_1corr_neg_items = filler_1corr(testing_1corr_neg_items);
var testing_2corr_pos_items = filler_2corr(testing_2corr_pos_items);
var testing_2corr_neg_items = filler_2corr(testing_2corr_neg_items);

for (i of testing_1corr_pos_items){
    i.push("1c", "pos")
}
for (i of testing_1corr_neg_items){
    i.push("1c", "neg")
}
for (i of testing_2corr_neg_items){
    i.push("2c", "neg")
}
for (i of testing_2corr_pos_items){
    i.push("2c", "pos")
}

var ta = shuffle(testing_1corr_pos_items
.concat(testing_1corr_neg_items)
.concat(testing_2corr_pos_items)
.concat(testing_2corr_neg_items));

var testing_items = [];
for (x of ta){
  testing_items.push(x.flat())
}


//turn the input into csv
var csv_training = training_items.map(function(d){
    return d.join();
}).join('\n');
var csv_training = csv_training+"\n";

//this needs changing
var csv_testing = testing_items.map(function(d){
    return d.join();
}).join('\n');

var csv_testing = csv_testing+"\n";


PennController.AddTable("myTable_training", "picture,word,chunk,comp\n"+
                        csv_training);

PennController.AddTable("myTable_testing", "picture,word,p1,p2,p3,p4,p5,n_correct,pol\n"+
                        csv_testing);
                        
//--------------------------------------------------------
//function to intersperse testing with a break trial (something wrong when called, sends results directly)
function SepWithN(sep, main, n) {
    this.args = [sep,main];

    this.run = function(arrays) {
        assert(arrays.length == 2, "Wrong number of arguments (or bad argument) to SepWithN");
        assert(parseInt(n) > 0, "N must be a positive number");
        let sep = arrays[0];
        let main = arrays[1];

        if (main.length <= 1)
            return main
        else {
            let newArray = [];
            while (main.length){
                for (let i = 0; i < n && main.length>0; i++)
                    newArray.push(main.pop());
                for (let j = 0; j < sep.length; ++j)
                    newArray.push(sep[j]);
            }
            return newArray;
        }
    }
}
function sepWithN(sep, main, n) { return new SepWithN(sep, main, n); }
//templates and running order

PennController.ResetPrefix(null); // Shorten command names (keep this line here)


_AddStandardCommands( function(PennEngine) {
    this.actions = {
        pause: function (resolve){
            if (this.type=="Timer" && this.running) {
                this.running = false;
                this.pausedTimestamp = Date.now();
                this.events.push(["Pause","Pause",this.pausedTimestamp,"NULL"]);
            }
            resolve();
        }
        ,
        resume: function(resolve){
            if (this.type=="Timer" && !this.running && this.pausedTimestamp) {
                this.resumedTimestamp = Date.now();
                const offset = this.resumedTimestamp-this.pausedTimestamp;
                const newStartTime = this.startTime + offset;
                this.events.push(["Resume","Resume",this.resumedTimestamp,"NULL"]);
                this.start();
                this.startTime = newStartTime;
            }
            resolve();
        }
    }
})
Sequence( "intro", sepWith("trytoquit", seq("training_0", "comprehension_0", "training_1", "comprehension_1", "training_2", "comprehension_2", "training_3", "comprehension_3", "training_4", 
"comprehension_4","break", "training_5", "comprehension_5", "training_6", "comprehension_6","break", "training_7", "comprehension_7", "training_8", "comprehension_8", 
"break", "training_9", "comprehension_9", "training_10", "comprehension_10", "training_11", "comprehension_11", "training_12", "comprehension_12", "break", "training_13", 
"comprehension_13", "training_14", "comprehension_14", "training_15", "comprehension_15", "training_16", "break",/*"comprehension_16", */
"testing_instructions", rshuffle("testing_1cor_pos", "testing_2cor_pos", "testing_1cor_neg", "testing_2cor_neg"), "final")), "send_man", "exit");

SendResults("send_man");

var local_time = Date() ;
// What is in Header happens at the beginning of every single trial
Header(
    //appends indexical info at the beginning of each row of results
    newVar("ID")
        .global()
    ,
    newVar("age")
        .global()
    ,
    newVar("francais")
        .global()
    ,
    newVar("autreLangue1")
        .global()
    ,
    newVar("scoreAutreLangue1")
        .global()
    ,
    newVar("autreLangue2")
        .global()
    ,
    newVar("scoreAutreLangue2")
        .global()
    ,
    newVar("autreLangue3")
        .global()
    ,
    newVar("scoreAutreLangue3")
        .global()
    ,
    newVar("autreLangue4")
        .global()
    ,
    newVar("scoreAutreLangue4")
        .global()
    ,
    newVar("autreLangue4")
        .global()
    ,
    newVar("scoreAutreLangue5")
        .global()
    ,
    newVar("diplome")
        .global()
    ,
    newVar("ParticCond", ParticCondition)
        .global()
    ,
    newVar("local_time", local_time)
        .global()
    ,
    newVar("shouldquit", false)
        .global()
    ,
    newTimer("t1", 500)
    ,
    newTimer("t2", 3000)
    ,

    newButton("stop", "Quit").print("right at 98vw","bottom at 98vh")
    ,
    
    getButton("stop").callback(
                getVar("shouldquit").set(true),newTooltip("fine", "OK! Finish the trial on this page, and your results will be submitted").size(200, 200).print("center at 90vw", "middle at 80vh")
            )
    ,
    // Delay of 250ms before every trial
    newTimer(250)
        .start()
        .wait()
)
.log("ID", getVar("ID"))
.log( "diplome" , getVar("diplome") )
.log( "scoreAutreLangue5", getVar("scoreAutreLangue5"))
.log( "autreLangue5", getVar("autreLangue5"))
.log( "scoreAutreLangue4", getVar("scoreAutreLangue4"))
.log( "autreLangue4", getVar("autreLangue4"))
.log( "scoreAutreLangue3", getVar("scoreAutreLangue3"))
.log( "autreLangue3", getVar("autreLangue3"))
.log( "scoreAutreLangue2", getVar("scoreAutreLangue2"))
.log( "autreLangue2", getVar("autreLangue2"))
.log( "scoreAutreLangue1", getVar("scoreAutreLangue1"))
.log( "autreLangue1", getVar("autreLangue1"))
.log( "francais" , getVar("francais") )
.log( "age" , getVar("age") )
.log( "ParticipantCondition", getVar("ParticCond"))
.log("local_time", getVar("local_time"))
            


// This log command adds columns reporting the participant's info to every line saved to the results

    
newTrial( "intro" ,

    newText("pres", "<p>Attention: it’s extremely important to carry out the experiment on a computer rather than on a smartphone or tablet. If you’ve opened the experiment on a smartphone or tablet, please close it and open the link again from a computer. Ensure you will not be distracted during the experiment: turn off any background TV, music, etc. as any distractions will impact the results.</p><p> As part of the experiment, you will be taught an alien language. The experiment lasts about 30 minutes, including scheduled breaks. The first part lasts about 20 minutes, the second part lasts about 10 minutes.</p><p> During the first half, you will be shown a series of creatures paired with the word that is used to refer to them. It’s crucial that you pay attention, since you will be required to answer memory questions about the name of the creatures throughout the first part. You’ll be able to take breaks during the first half (the progress bar will indicate how far into the experiment you are). The breaks are not meant to last more than a few minutes: when it’s time for a break, a timer will appear on your screen, and the option to continue will be available after two minutes – you may then continue the experiment. </p><p>In the second half, you’ll be shown a word and a series of images. You’ll be instructed to click on any and all items that either can be referred to with that word, or that can’t be referred to with the given word (depending on the instructions). The instructions will be given to you at the start of every trial. You can quit the experiment at any point. To do so, click on the 'Quit' button in the bottom right corner of the screen. It is important to note that once you click the button you will not be given the option to resume the experiment, so ensure quitting is in fact your intention before clicking the button. </p><p>All data will be anonymised and will only be used for research purposes. If you wish to get a copy of your data, please send your Prolific ID to mcopot@linguist.univ-paris-diderot.fr. If you have questions concerning the experiment and/or you would like to be informed of its results, please write to the address above. </p> ")
        .css("margin-right","250px")
        .css("margin-left","250px")
        .print()
    ,

    newScale("acceptation", "<p>I give my free and informed consent to participate in the experiment and I am aware I can abandon the experiment at any time without having to give a reason for it. </p>")
        .labelsPosition("top")
        .css("margin-left","300px")
        .css("margin-right","300px")
        .print()
        .wait()
    ,
    
    newButton("Start")
        .center()
        .print()
        .wait()
    ,
    clear()
    ,
    newTextInput("askID")
        .size(250,20)
        .before(newText("Prolific ID:&nbsp"))
        .after(newText("<i>(24 characters - press enter when done)</i>"))
        .print()
        .wait(getTextInput("askID").test.text(/^[a-z0-9]{24}$/))
    ,
    newTextInput("askAge")
        .size(70, 20)
        .before(newText("Age :&nbsp"))
        .after(newText("<i>(Numbers only - press enter when done)<i>"))
        .print()
        .wait(getTextInput("askAge").test.text(/^[0-9]+$/))
    ,
    newDropDown("DDLfrancais", "")
        .add("my native language", "one of my native languages", "a second language")
        .before(newText("English is :"))
        .print()
        .wait()
    ,
    newText("<p>Other languages spoken</p>")
        .print()
    ,
    
    newTextInput("autreLangue1")
        .size(100, 20)
        .print()
    ,
    newScale("scoreAutreLangue1", 5)
                    .before(newText("left","Beginner"))
                    .after(newText("right", "Bilingual"))
                    .print()
    ,                
    newTextInput("autreLangue2")
        .size(100, 20)
        .print()
    ,
    newScale("scoreAutreLangue2", 5)
                    .before(newText("Beginner"))
                    .after(newText("Bilingual"))
                    .print()
    ,
    newTextInput("autreLangue3")
        .size(100, 20)
        .print()
    ,    
    newScale("scoreAutreLangue3", 5)
                    .before(newText("Beginner"))
                    .after(newText("Bilingual"))
                    .print()
    ,
        newTextInput("autreLangue4")
        .size(100, 20)
        .print()
    ,
    newScale("scoreAutreLangue4", 5)
                    .before(newText("Beginner"))
                    .after(newText("Bilingual"))
                    .print()
    ,
        newTextInput("autreLangue5")
        .size(100, 20)
        .print()
    ,
    newScale("scoreAutreLangue5", 5)
                    .before(newText("Beginner"))
                    .after(newText("Bilingual"))
                    .print()
    ,
    newButton("Click to confirm the information above")
        .print()
        .wait()
    ,
    newDropDown("educ", "")
        .add("None", "Primary school or equivalent", "High school or equivalent", "Bachelor's degree or equivalent", "Master's degree or equivalent", "PhD or equivalent" )
        .before(newText("Your highest qualification:"))
        .print()
        .wait()
    ,
    newButton("Start")
        .print()
        .wait()
    ,
    
    getTextInput("askAge").setVar("age"),
    getDropDown("DDLfrancais")
        .test.selected(0).success( 
            getVar("francais").set("FR-seule-maternelle")
        )
        .test.selected(1).success( 
            getVar("francais").set("FR-parmi-maternelle")
        )
        .test.selected(2).success( 
            getVar("francais").set("FR-2elangue")
        ),
    
    getTextInput("autreLangue1").setVar("autreLangue1"),
    getScale("scoreAutreLangue1").setVar("scoreAutreLangue1"),
    
    getTextInput("autreLangue2").setVar("autreLangue2"),
    getScale("scoreAutreLangue2").setVar("scoreAutreLangue2"),
    
    getTextInput("autreLangue3").setVar("autreLangue3"),
    getScale("scoreAutreLangue3").setVar("scoreAutreLangue3"),
    
    getTextInput("autreLangue4").setVar("autreLangue4"),
    getScale("scoreAutreLangue4").setVar("scoreAutreLangue4"),
    
    getTextInput("autreLangue5").setVar("autreLangue5"),
    getScale("scoreAutreLangue5").setVar("scoreAutreLangue5"),
    
    getTextInput("askID").setVar("ID"),
    
    getDropDown("educ")
        .test.selected(0).success( 
            getVar("diplome").set("aucun")
        )
        .test.selected(1).success( 
            getVar("diplome").set("brevet")
        )
        .test.selected(2).success( 
            getVar("diplome").set("bac")
        )
        .test.selected(3).success( 
            getVar("diplome").set("licence")
        )
        .test.selected(4).success( 
            getVar("diplome").set("master")
        )
        .test.selected(5).success( 
            getVar("diplome").set("doctorat")
        )
        
);
newTrial( "trytoquit" ,
  getVar("shouldquit").test.is(true).success(
    SendResults()
    ,
    clear()
    ,
    newButton().wait()
  )
);

//template for training in chunks
customTrial_training = label => row => newTrial( label , 
        newText("t","<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.picture,"?raw=true' width='420' height='420'class='center'>"))
        .center()
        .settings.size(420, 420) //check if there is a way to make it relative to the screen size/type
        .print()
        
        ,
        getTimer("t1")
        .start()
        .wait()
        ,
        newText(row.word)
        .css("font-size", "40px")
        .css("text-transform", "uppercase")
        .center()
        .bold()
        .print()
        ,
        getTimer("t2")
        .start()
        .wait()
        ).log("training_picture", row.picture)
        .log("training_word", row.word)

//template for comprehension questions
customTrial_comprehension = label => row => newTrial(label,
    newText("Type the name of this item in the text box below and press enter")
    .center()
    .bold()
    .print()
    ,
    newText("d", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.picture,"?raw=true' width='420' height='420'class='center'>"))
    .size(420, 420)
    .center()
    .print()
    ,
    newTextInput("answer_comp", "")
    //add testing command to see if it matches memory_item.word
    //check that log is at the right level 
    .lines(1)
    .settings.before(newText("Name:"))
    .size(200,50)
    .center()
    .print()
    .wait(getTextInput("answer_comp")
    .test.text(new RegExp(row.word, "i"))
    .failure(getTextInput("answer_comp"), newText("failure", "incorrect - the correct answer is "+row.word.toUpperCase()+".\n Enter the correct answer and press enter to proceed").center().print())
    .success(getText("failure").remove(), newText("correct!").print(), newButton("continue").print().wait()))
    .log("first")
    ).log("comprehension_picture", row.picture)
    .log("comprehension_word", row.word);
//something weird: for loop is working, trials have the right names, so num is being a placeholder behaving as expected
//but I get the same items in cycles for (training+comp)
//it's not an issue of the csv table, all works as expected there
//WHY 
/*
for (num of [...Array(16).keys()]){
Template( GetTable("myTable_training").filter(row => (row.chunk === "block_"+num)&(row.comp == "Y")), customTrial_comprehension("comprehension_"+num));
Template( GetTable("myTable_training").filter(row => (row.chunk === "block_"+num)), customTrial_training("training_"+num));
}*/


Template( GetTable("myTable_training").filter(row => (row.chunk == "block_0")&(row.comp == "Y")), customTrial_comprehension("comprehension_0"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_0")), customTrial_training("training_0"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_1")&(row.comp == "Y")), customTrial_comprehension("comprehension_1"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_1")), customTrial_training("training_1"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_2")&(row.comp == "Y")), customTrial_comprehension("comprehension_2"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_2")), customTrial_training("training_2"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_3")&(row.comp == "Y")), customTrial_comprehension("comprehension_3"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_3")), customTrial_training("training_3"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_4")&(row.comp == "Y")), customTrial_comprehension("comprehension_4"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_4")), customTrial_training("training_4"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_5")&(row.comp == "Y")), customTrial_comprehension("comprehension_5"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_5")), customTrial_training("training_5"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_6")&(row.comp == "Y")), customTrial_comprehension("comprehension_6"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_6")), customTrial_training("training_6"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_7")&(row.comp == "Y")), customTrial_comprehension("comprehension_7"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_7")), customTrial_training("training_7"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_8")&(row.comp == "Y")), customTrial_comprehension("comprehension_8"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_8")), customTrial_training("training_8"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_9")&(row.comp == "Y")), customTrial_comprehension("comprehension_9"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_9")), customTrial_training("training_9"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_10")&(row.comp == "Y")), customTrial_comprehension("comprehension_10"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_10")), customTrial_training("training_10"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_11")&(row.comp == "Y")), customTrial_comprehension("comprehension_11"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_11")), customTrial_training("training_11"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_12")&(row.comp == "Y")), customTrial_comprehension("comprehension_12"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_12")), customTrial_training("training_12"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_13")&(row.comp == "Y")), customTrial_comprehension("comprehension_13"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_13")), customTrial_training("training_13"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_14")&(row.comp == "Y")), customTrial_comprehension("comprehension_14"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_14")), customTrial_training("training_14"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_15")&(row.comp == "Y")), customTrial_comprehension("comprehension_15"));
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_15")), customTrial_training("training_15"));
/*Template( GetTable("myTable_training").filter(row => (row.chunk == "block_16")&(row.comp == "Y")), customTrial_comprehension("comprehension_16"));*/
Template( GetTable("myTable_training").filter(row => (row.chunk == "block_16")), customTrial_training("training_16"));



  

newTrial("testing_instructions",
    newText("<p>We move on to the second part. You will be shown a set of images preceded by an instruction. The instruction will ask you to identify any and all images that can be referred to by a given word in the language you’ve just been learning, or any and all images that CANNOT be referred to by that word. Select any and all items that fulfill the brief (you can select and deselect items by clicking on them, finalising your choice with the “continue” button). Selected images will have a black frame around them. If no images or all images fit the description, select the dedicated checkbox.</p>")
    .css("margin-right","200px")
    .css("margin-left","200px")
    .print()
    ,
    newButton("continue")
    .css("margin-left","200px")
    .print()
    .wait()
)

const newToggleImage = (name,file) => [
    newVar(name+"-var", 1),
    newSelector(name+"-sel")
        .frame("solid 6px black")
        .callback( getVar(name+"-var").set(v=>1-v).test.is(1).success(getSelector(name+"-sel").unselect()) )
        .log("last")
    ,
    newText(name, file)
        .size(200,200)
        .selector("shapes").selector(name+"-sel")
]

//testing - set up canvas and have pics as input - can 
//testing, one right
Template(GetTable("myTable_testing").filter( row => (row.n_correct == "1c") & (row.pol == "pos")),
    row => newTrial("testing_1cor_pos",
    
    newSelector("shapes").disable()
    ,
    newText( "Click on any and all pictures corresponding to "+row.word.toUpperCase() )
        .css("font-size", "30px")
        .center()
        .bold()
        .print()
    ,
    newToggleImage("target_1", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.picture,"?raw=true' width='200' height='200' class='center'>")),
    newToggleImage("d1", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p1,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d2", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p2,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d3", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p3,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d4", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p4,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d5", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p5,"?raw=true' width='200' height='200' class='center'>"))
    ,
    newCanvas( 'myCanvas', 700, 500)
        .add( 20, 40, getText("target_1"), 0 )
        .add( 20, 270, getText("d1"), 1 )
        .add( 257, 40, getText("d2"), 2 )
        .add( 257, 270, getText("d3"), 3 )
        .add( 495, 40, getText("d4"), 4 )
        .add( 495, 270, getText("d5"), 5 )
        .center()
        .print()
    ,
    getSelector("shapes").shuffle()
    ,
    newScale("none_above", "None of the above")
    .radio()
    .labelsPosition("right")
    .center()
    .print()
    .log("last")
    ,
    newScale("all_above", "All of the above")
    .radio()
    .labelsPosition("right")
    .center()
    .print()
    .log("last")
    ,
    newButton("confirm")
        .print()
        .wait()

    
    ).log("target", row.picture)
    .log("d1", row.p1)
    .log("d2", row.p2)
    .log("d3", row.p3)
    .log("d4", row.p4)
    .log("d5", row.p5)
)



Template( GetTable("myTable_testing").filter( row => (row.n_correct == "2c") & (row.pol == "pos")) ,
  row => newTrial("testing_2cor_pos",
    
    newSelector("shapes").disable()
    ,
    newText( "Click on any and all pictures corresponding to "+row.word.toUpperCase() )
        .css("font-size", "30px")
        .center()
        .bold()
        .print()
,
    newToggleImage("target_1", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.picture,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("target_2", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p1,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d2", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p2,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d3", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p3,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d4", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p4,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d5", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p5,"?raw=true' width='200' height='200'class='center'>"))
    ,
    newCanvas( 'myCanvas', 700, 500)
        .add( 20, 40, getText("target_1"), 0 )
        .add( 20, 270, getText("target_2"), 1 )
        .add( 257, 40, getText("d2"), 2 )
        .add( 257, 270, getText("d3"), 3 )
        .add( 495, 40, getText("d4"), 4 )
        .add( 495, 270, getText("d5"), 5 )
        .center()
        .print()
    ,
    getSelector("shapes").shuffle()
    ,
    newScale("none_above", "None of the above")
    .radio()
    .labelsPosition("right")
    .center()
    .print()
    .log("last")
    ,
    newScale("all_above", "All of the above")
    .radio()
    .labelsPosition("right")
    .center()
    .print()
    .log("last")
    ,
    newButton("confirm")
        .print()
        .wait()
  )
  .log("target_1", row.picture)
  .log("target_2", row.p1)
  .log("d2", row.p2)
  .log("d3", row.p3)
  .log("d4", row.p4)
  .log("d5", row.p5)
)
Template(GetTable("myTable_testing").filter( row => (row.n_correct == "1c") & (row.pol == "neg")),
    row => newTrial("testing_1cor_neg",
    
    newSelector("shapes").disable()
    ,
    newText( "Click on any and all pictures NOT corresponding to "+row.word.toUpperCase() )
        .css("font-size", "30px")
        .center()
        .bold()
        .print()
,
    newToggleImage("target_1", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.picture,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d1", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p1,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d2", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p2,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d3", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p3,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d4", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p4,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d5", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p5,"?raw=true' width='200' height='200'class='center'>"))
    ,
    newCanvas( 'myCanvas', 700, 500)
        .add( 20, 40, getText("target_1"), 0 )
        .add( 20, 270, getText("d1"), 1 )
        .add( 257, 40, getText("d2"), 2 )
        .add( 257, 270, getText("d3"), 3 )
        .add( 495, 40, getText("d4"), 4 )
        .add( 495, 270, getText("d5"), 5 )
        .center()
        .print()
    ,
    getSelector("shapes").shuffle()
    ,
    newScale("none_above", "None of the above")
    .radio()
    .labelsPosition("right")
    .center()
    .print()
    .log("last")
    ,
    newScale("all_above", "All of the above")
    .radio()
    .labelsPosition("right")
    .center()
    .print()
    .log("last")
    ,
    newButton("confirm")
        .print()
        .wait()

    
    ).log("target", row.picture)
    .log("d1", row.p1)
    .log("d2", row.p2)
    .log("d3", row.p3)
    .log("d4", row.p4)
    .log("d5", row.p5)
)

Template(GetTable("myTable_testing").filter( row => (row.n_correct == "2c") & (row.pol == "neg")),
    row => newTrial("testing_2cor_neg",
    
        newSelector("shapes").disable()
    ,
    newText( "Click on any and all pictures NOT corresponding to "+row.word.toUpperCase() )
        .css("font-size", "30px")
        .center()
        .bold()
        .print()
,
    newToggleImage("target_1", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.picture,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("target_2", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p1,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d2", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p2,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d3", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p3,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d4", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p4,"?raw=true' width='200' height='200'class='center'>")),
    newToggleImage("d5", "<img src='https://github.com/CopotM/AGL_pics/blob/master/chunk_includes/".concat(row.p5,"?raw=true' width='200' height='200'class='center'>"))
    ,
    newCanvas( 'myCanvas', 700, 500)
        .add( 20, 40, getText("target_1"), 0 )
        .add( 20, 270, getText("target_2"), 1 )
        .add( 257, 40, getText("d2"), 2 )
        .add( 257, 270, getText("d3"), 3 )
        .add( 495, 40, getText("d4"), 4 )
        .add( 495, 270, getText("d5"), 5 )
        .center()
        .print()
    ,
    getSelector("shapes").shuffle()
    ,
    newScale("none_above", "None of the above")
    .radio()
    .labelsPosition("right")
    .center()
    .print()
    .log("last")
    ,
    newScale("all_above", "All of the above")
    .radio()
    .labelsPosition("right")
    .center()
    .print()
    .log("last")
    ,
    newButton("confirm")
        .print()
        .wait()
    
    ).log("target_1", row.picture)
    .log("target_2", row.p1)
    .log("d2", row.p2)
    .log("d3", row.p3)
    .log("d4", row.p4)
    .log("d5", row.p5)
)




newTrial("break",
    newHtml("timHTML", "timer_exp.html")
    .print()
    ,
    newTimer(122000)
    .start()
    .wait()
    ,
    newButton("continue")
    .css("padding", "40px 20px")
    .css("font-size", "30px")
    .bold()
    .center()
    .print()
    .wait()
)
,    
    
     newTrial("exit",
    newHtml("exitHTML", "exit_maze.html")
    .print()
    .wait()
)
,   


newTrial( "final" ,


    newText("<p>Thank you for your participation! You can withdraw consent to let us use your data and results by entering your Prolific ID within the next 30 days at the following link:  <a href='https://ibex.llf.aiakide.net/ibexexps/mcopot2/AGL_withdraw/experiment.html'>https://ibex.llf.aiakide.net/ibexexps/mcopot2/AGL_withdraw/experiment.html</a> (no identifying information, including IP address, will be stored in the withdrawal process).</p><p> Make sure you click on the button below, otherwise your results won't be recorded!</p>")
    .css("margin-right","300px")
    .css("margin-left","300px")
    .print()

    ,
    newButton("CLICK HERE TO SUBMIT RESULTS")
    .center()
    .bold()
    .css("padding", "40px 20px")
    .css("font-size", "30px")
    .print()
    .callback(getVar("shouldquit").set(true))
    .wait() 
    
    
)


