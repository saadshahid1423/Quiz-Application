function check(){
    var score = 0
    var right_answer_1 = document.getElementById('q1-a1')
    var q1_answer_2 = document.getElementById("q1-a2")
    var q1_answer_3 = document.getElementById("q1-a3")
    var q1_answer_4 = document.getElementById("q1-a4")
    if (right_answer_1.checked == true){
        score++
    }

    var q1_answer_1 = document.getElementById("q1-a1")
    var q1_answer_2 = document.getElementById("q1-a2")
    var q1_answer_3 = document.getElementById("q1-a3")
    var right_answer_4 = document.getElementById('q1-a4')
    if (right_answer_4.checked == true){
        score++
    }

    var q2_answer_1 = document.getElementById("q2-a1")
    var q2_answer_2 = document.getElementById("q2-a2")
    var q2_answer_3 = document.getElementById("q2-a3")
    var right_answer_4 = document.getElementById('q2-a4')
    if (right_answer_4.checked == true){
        score++
    }

    var q3_answer_1 = document.getElementById("q3-a1")
    var q3_answer_2 = document.getElementById("q3-a2")
    var right_answer_3 = document.getElementById('q3-a3')
    var q3_answer_4 = document.getElementById("q3-a4")
    if (right_answer_3.checked == true){
        score++
    }

    var q4_answer_1 = document.getElementById("q4-a1")
    var q4_answer_2 = document.getElementById("q4-a2")
    var q4_answer_3 = document.getElementById("q4-a3")
    var right_answer_4 = document.getElementById('q4-a4')
    if (right_answer_4.checked == true){
        score++
    }

    var q5_answer_1 = document.getElementById("q5-a1")
    var q5_answer_2 = document.getElementById("q5-a2")
    var q5_answer_3 = document.getElementById("q5-a3")
    var right_answer_4 = document.getElementById('q5-a4')
    if (right_answer_4.checked == true){
        score++
    }

    var q6_answer_1 = document.getElementById("q6-a1")
    var right_answer_2 = document.getElementById("q6-a2")
    var q6_answer_3 = document.getElementById("q6-a3")
    var q6_answer_4 = document.getElementById('q6-a4')
    if (right_answer_2.checked == true){
        score++
    }

    var q7_answer_1 = document.getElementById("q7-a1")
    var q7_answer_2 = document.getElementById("q7-a2")
    var right_answer_3 = document.getElementById('q7-a3')
    var q7_answer_4 = document.getElementById("q7-a4")
    if (right_answer_3.checked == true){
        score++
    }

    var q8_answer_1 = document.getElementById("q8-a1")
    var right_answer_2 = document.getElementById("q8-a2")
    var q8_answer_3 = document.getElementById("q8-a3")
    var q8_answer_4 = document.getElementById('q8-a4')
    if (right_answer_2.checked == true){
        score++
    }

    var q9_answer_1 = document.getElementById("q9-a1")
    var right_answer_2 = document.getElementById("q9-a2")
    var q9_answer_3 = document.getElementById("q9-a3")
    var q9_answer_4 = document.getElementById('q9-a4')
    if (right_answer_2.checked == true){
        score++
    }

    var q10_answer_1 = document.getElementById("q10-a1")
    var q10_answer_2 = document.getElementById("q10-a2")
    var q10_answer_3 = document.getElementById("q10-a3")
    var right_answer_4 = document.getElementById('q10-a4')
    if (right_answer_4.checked == true){
        score++
    }
    
    document.write( "<b>" + "Total Questions = 10" + "<br>" + "Correct Answers = " + score + "<br>" + "Precentage = " + score/10*100 + "%")
}
