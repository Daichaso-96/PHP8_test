const questions = [
  {
    q: "PHPで変数を宣言する際に使用する記号はどれですか?",
    options: ["@", "$", "#", "&"],
    correct: 1,
    explanations: [
      "@: エラー抑制演算子として使用されます",
      "$: 正解。PHPでは変数の前に$記号を付けます",
      "#: PHPではコメント記号として使用されます",
      "&: 参照渡しの際に使用されます"
    ]
  },
  {
    q: "文字列を連結する演算子はどれですか?",
    options: ["+", ".", "&", "||"],
    correct: 1,
    explanations: [
      "+: 数値の加算に使用されます",
      ".: 正解。PHPでは文字列連結にドット演算子を使用します",
      "&: ビット演算子として使用されます",
      "||: 論理OR演算子です"
    ]
  },
  {
    q: "配列の要素数を取得する関数はどれですか?",
    options: ["length()", "size()", "count()", "num()"],
    correct: 2,
    explanations: [
      "length(): PHPには存在しない関数です",
      "size(): PHPには存在しない関数です",
      "count(): 正解。配列の要素数を取得します",
      "num(): PHPには存在しない関数です"
    ]
  },
  {
    q: "文字列を指定した区切り文字で分割する関数はどれですか?",
    options: ["split()", "explode()", "divide()", "separate()"],
    correct: 1,
    explanations: [
      "split(): 非推奨の関数です",
      "explode(): 正解。文字列を配列に分割します",
      "divide(): PHPには存在しない関数です",
      "separate(): PHPには存在しない関数です"
    ]
  },
  {
    q: "配列をJSON文字列に変換する関数はどれですか?",
    options: ["json_encode()", "json_parse()", "to_json()", "array_to_json()"],
    correct: 0,
    explanations: [
      "json_encode(): 正解。配列やオブジェクトをJSON文字列に変換します",
      "json_parse(): JavaScriptの関数です",
      "to_json(): PHPには存在しない関数です",
      "array_to_json(): PHPには存在しない関数です"
    ]
  },
  {
    q: "ファイルを開く関数はどれですか?",
    options: ["open()", "fopen()", "file_open()", "readfile()"],
    correct: 1,
    explanations: [
      "open(): PHPには存在しない関数です",
      "fopen(): 正解。ファイルまたはURLを開きます",
      "file_open(): PHPには存在しない関数です",
      "readfile(): ファイルを読み込んで出力する関数です"
    ]
  },
  {
    q: "セッションを開始する関数はどれですか?",
    options: ["session_begin()", "start_session()", "session_start()", "init_session()"],
    correct: 2,
    explanations: [
      "session_begin(): PHPには存在しない関数です",
      "start_session(): PHPには存在しない関数です",
      "session_start(): 正解。セッションを開始または再開します",
      "init_session(): PHPには存在しない関数です"
    ]
  },
  {
    q: "クッキーを設定する関数はどれですか?",
    options: ["set_cookie()", "cookie_set()", "setcookie()", "create_cookie()"],
    correct: 2,
    explanations: [
      "set_cookie(): PHPには存在しない関数です",
      "cookie_set(): PHPには存在しない関数です",
      "setcookie(): 正解。クッキーを送信します",
      "create_cookie(): PHPには存在しない関数です"
    ]
  },
  {
    q: "PDOは何の略ですか?",
    options: ["PHP Database Object", "PHP Data Object", "Personal Data Object", "PHP Direct Object"],
    correct: 1,
    explanations: [
      "PHP Database Object: 惜しいですが不正解です",
      "PHP Data Object: 正解。データベースアクセス用の拡張機能です",
      "Personal Data Object: 不正解です",
      "PHP Direct Object: 不正解です"
    ]
  },
  {
    q: "HTMLエスケープする関数はどれですか?",
    options: ["escape_html()", "html_encode()", "htmlspecialchars()", "sanitize()"],
    correct: 2,
    explanations: [
      "escape_html(): PHPには存在しない関数です",
      "html_encode(): PHPには存在しない関数です",
      "htmlspecialchars(): 正解。特殊文字をHTMLエンティティに変換します",
      "sanitize(): PHPには存在しない関数です"
    ]
  },
  {
    q: "現在のスクリプトファイル名を取得するマジック定数はどれですか?",
    options: ["__FILE__", "__SCRIPT__", "__NAME__", "__PATH__"],
    correct: 0,
    explanations: [
      "__FILE__: 正解。現在のファイルのフルパスを返します",
      "__SCRIPT__: PHPには存在しない定数です",
      "__NAME__: PHPには存在しない定数です",
      "__PATH__: PHPには存在しない定数です"
    ]
  },
  {
    q: "文字列の長さを取得する関数はどれですか?",
    options: ["length()", "strlen()", "size()", "count()"],
    correct: 1,
    explanations: [
      "length(): PHPには存在しない関数です",
      "strlen(): 正解。文字列の長さを返します",
      "size(): PHPには存在しない関数です",
      "count(): 配列の要素数を取得する関数です"
    ]
  },
  {
    q: "配列のキーのみを取得する関数はどれですか?",
    options: ["array_keys()", "get_keys()", "keys()", "array_key()"],
    correct: 0,
    explanations: [
      "array_keys(): 正解。配列のすべてのキーを返します",
      "get_keys(): PHPには存在しない関数です",
      "keys(): PHPには存在しない関数です",
      "array_key(): PHPには存在しない関数です"
    ]
  },
  {
    q: "定数を定義する関数はどれですか?",
    options: ["const()", "define()", "constant()", "set_const()"],
    correct: 1,
    explanations: [
      "const(): キーワードとして使用されますが、関数ではありません",
      "define(): 正解。定数を定義します",
      "constant(): 定数の値を取得する関数です",
      "set_const(): PHPには存在しない関数です"
    ]
  },
  {
    q: "現在の日時を取得する関数はどれですか?",
    options: ["now()", "datetime()", "date()", "time()"],
    correct: 2,
    explanations: [
      "now(): PHPには存在しない関数です",
      "datetime(): PHPには存在しない関数です",
      "date(): 正解。フォーマットされた日付文字列を返します",
      "time(): UNIXタイムスタンプを返します"
    ]
  },
  {
    q: "ファイルの内容を一括で取得する関数はどれですか?",
    options: ["read_file()", "file_read()", "file_get_contents()", "get_file()"],
    correct: 2,
    explanations: [
      "read_file(): PHPには存在しない関数です",
      "file_read(): PHPには存在しない関数です",
      "file_get_contents(): 正解。ファイル全体を文字列に読み込みます",
      "get_file(): PHPには存在しない関数です"
    ]
  },
  {
    q: "配列を結合する関数はどれですか?",
    options: ["array_combine()", "array_merge()", "array_join()", "merge()"],
    correct: 1,
    explanations: [
      "array_combine(): キーと値から配列を作成する関数です",
      "array_merge(): 正解。複数の配列を結合します",
      "array_join(): PHPには存在しない関数です",
      "merge(): PHPには存在しない関数です"
    ]
  },
  {
    q: "NULLかどうかを判定する関数はどれですか?",
    options: ["isnull()", "is_null()", "null_check()", "check_null()"],
    correct: 1,
    explanations: [
      "isnull(): PHPには存在しない関数です",
      "is_null(): 正解。変数がNULLかどうかを検査します",
      "null_check(): PHPには存在しない関数です",
      "check_null(): PHPには存在しない関数です"
    ]
  },
  {
    q: "例外を投げる構文はどれですか?",
    options: ["raise Exception", "throw new Exception()", "error Exception", "exception()"],
    correct: 1,
    explanations: [
      "raise Exception: Pythonの構文です",
      "throw new Exception(): 正解。PHPで例外を投げます",
      "error Exception: PHPには存在しない構文です",
      "exception(): PHPには存在しない関数です"
    ]
  },
  {
    q: "例外を捕捉する構文はどれですか?",
    options: ["try-except", "try-catch", "begin-rescue", "handle-error"],
    correct: 1,
    explanations: [
      "try-except: Pythonの構文です",
      "try-catch: 正解。PHPで例外を処理します",
      "begin-rescue: Rubyの構文です",
      "handle-error: PHPには存在しない構文です"
    ]
  },
  {
    q: "HTMLタグを除去する関数はどれですか?",
    options: ["remove_tags()", "strip_tags()", "delete_tags()", "clear_tags()"],
    correct: 1,
    explanations: [
      "remove_tags(): PHPには存在しない関数です",
      "strip_tags(): 正解。文字列からHTMLタグを取り除きます",
      "delete_tags(): PHPには存在しない関数です",
      "clear_tags(): PHPには存在しない関数です"
    ]
  },
  {
    q: "配列の最後に要素を追加する関数はどれですか?",
    options: ["array_append()", "array_push()", "array_add()", "push()"],
    correct: 1,
    explanations: [
      "array_append(): PHPには存在しない関数です",
      "array_push(): 正解。配列の末尾に要素を追加します",
      "array_add(): PHPには存在しない関数です",
      "push(): PHPには存在しない関数です"
    ]
  },
  {
    q: "配列の先頭に要素を追加する関数はどれですか?",
    options: ["array_unshift()", "array_prepend()", "array_insert()", "unshift()"],
    correct: 0,
    explanations: [
      "array_unshift(): 正解。配列の先頭に要素を追加します",
      "array_prepend(): PHPには存在しない関数です",
      "array_insert(): PHPには存在しない関数です",
      "unshift(): PHPには存在しない関数です"
    ]
  },
  {
    q: "配列の値のみを取得する関数はどれですか?",
    options: ["array_vals()", "array_values()", "get_values()", "values()"],
    correct: 1,
    explanations: [
      "array_vals(): PHPには存在しない関数です",
      "array_values(): 正解。配列のすべての値を返します",
      "get_values(): PHPには存在しない関数です",
      "values(): PHPには存在しない関数です"
    ]
  },
  {
    q: "文字列を小文字に変換する関数はどれですか?",
    options: ["lowercase()", "tolower()", "strtolower()", "lower()"],
    correct: 2,
    explanations: [
      "lowercase(): PHPには存在しない関数です",
      "tolower(): PHPには存在しない関数です",
      "strtolower(): 正解。文字列を小文字にします",
      "lower(): PHPには存在しない関数です"
    ]
  },
  {
    q: "文字列を大文字に変換する関数はどれですか?",
    options: ["uppercase()", "toupper()", "strtoupper()", "upper()"],
    correct: 2,
    explanations: [
      "uppercase(): PHPには存在しない関数です",
      "toupper(): PHPには存在しない関数です",
      "strtoupper(): 正解。文字列を大文字にします",
      "upper(): PHPには存在しない関数です"
    ]
  },
  {
    q: "現在のUNIXタイムスタンプを取得する関数はどれですか?",
    options: ["timestamp()", "time()", "now()", "gettime()"],
    correct: 1,
    explanations: [
      "timestamp(): PHPには存在しない関数です",
      "time(): 正解。現在のUNIXタイムスタンプを返します",
      "now(): PHPには存在しない関数です",
      "gettime(): PHPには存在しない関数です"
    ]
  },
  {
    q: "外部変数を安全に取得する関数はどれですか?",
    options: ["$_POST[]", "filter_input()", "get_post()", "post_data()"],
    correct: 1,
    explanations: [
      "$_POST[]: 直接アクセスも可能ですが、フィルタリングされていません",
      "filter_input(): 正解。外部変数をフィルタリングして取得します",
      "get_post(): PHPには存在しない関数です",
      "post_data(): PHPには存在しない関数です"
    ]
  },
  {
    q: "変数が空かどうかを判定する関数はどれですか?",
    options: ["is_empty()", "empty()", "check_empty()", "null()"],
    correct: 1,
    explanations: [
      "is_empty(): PHPには存在しない関数です",
      "empty(): 正解。変数が空であるかどうかを検査します",
      "check_empty(): PHPには存在しない関数です",
      "null(): PHPには存在しない関数です"
    ]
  },
  {
    q: "配列内に特定の値が存在するか確認する関数はどれですか?",
    options: ["array_exists()", "in_array()", "array_search()", "has_value()"],
    correct: 1,
    explanations: [
      "array_exists(): PHPには存在しない関数です",
      "in_array(): 正解。配列に値があるか調べます",
      "array_search(): 値を検索してキーを返す関数です",
      "has_value(): PHPには存在しない関数です"
    ]
  },
  {
    q: "配列を昇順にソートする関数はどれですか?",
    options: ["array_sort()", "sort()", "order()", "arrange()"],
    correct: 1,
    explanations: [
      "array_sort(): PHPには存在しない関数です",
      "sort(): 正解。配列を昇順にソートします",
      "order(): PHPには存在しない関数です",
      "arrange(): PHPには存在しない関数です"
    ]
  },
  {
    q: "文字列の一部を取得する関数はどれですか?",
    options: ["substring()", "substr()", "slice()", "cut()"],
    correct: 1,
    explanations: [
      "substring(): JavaScriptの関数です",
      "substr(): 正解。文字列の一部を返します",
      "slice(): JavaScriptの関数です",
      "cut(): PHPには存在しない関数です"
    ]
  },
  {
    q: "ファイルに書き込む関数はどれですか?",
    options: ["write_file()", "fwrite()", "file_write()", "put_file()"],
    correct: 1,
    explanations: [
      "write_file(): PHPには存在しない関数です",
      "fwrite(): 正解。ファイルへバイナリセーフに書き込みます",
      "file_write(): PHPには存在しない関数です",
      "put_file(): PHPには存在しない関数です"
    ]
  },
  {
    q: "PHPでクラスを定義するキーワードはどれですか?",
    options: ["class", "object", "define", "struct"],
    correct: 0,
    explanations: [
      "class: 正解。クラスを定義するキーワードです",
      "object: PHPには存在しないキーワードです",
      "define: 定数を定義する関数です",
      "struct: C言語のキーワードです"
    ]
  },
  {
    q: "クラスのインスタンスを生成するキーワードはどれですか?",
    options: ["create", "new", "instance", "make"],
    correct: 1,
    explanations: [
      "create: PHPには存在しないキーワードです",
      "new: 正解。新しいオブジェクトを生成します",
      "instance: PHPには存在しないキーワードです",
      "make: PHPには存在しないキーワードです"
    ]
  },
  {
    q: "配列を文字列に結合する関数はどれですか?",
    options: ["array_join()", "implode()", "join_array()", "concat()"],
    correct: 1,
    explanations: [
      "array_join(): PHPには存在しない関数です",
      "implode(): 正解。配列要素を文字列により連結します",
      "join_array(): PHPには存在しない関数です",
      "concat(): PHPには存在しない関数です"
    ]
  },
  {
    q: "正規表現でマッチングを行う関数はどれですか?",
    options: ["regex_match()", "preg_match()", "match()", "pattern_match()"],
    correct: 1,
    explanations: [
      "regex_match(): PHPには存在しない関数です",
      "preg_match(): 正解。正規表現によるマッチングを行います",
      "match(): PHPには存在しない関数です",
      "pattern_match(): PHPには存在しない関数です"
    ]
  },
  {
    q: "配列の最後の要素を削除する関数はどれですか?",
    options: ["array_pop()", "array_remove_last()", "pop()", "remove_last()"],
    correct: 0,
    explanations: [
      "array_pop(): 正解。配列の末尾から要素を取り除きます",
      "array_remove_last(): PHPには存在しない関数です",
      "pop(): PHPには存在しない関数です",
      "remove_last(): PHPには存在しない関数です"
    ]
  },
  {
    q: "配列の先頭の要素を削除する関数はどれですか?",
    options: ["array_shift()", "array_remove_first()", "shift()", "remove_first()"],
    correct: 0,
    explanations: [
      "array_shift(): 正解。配列の先頭から要素を取り除きます",
      "array_remove_first(): PHPには存在しない関数です",
      "shift(): PHPには存在しない関数です",
      "remove_first(): PHPには存在しない関数です"
    ]
  },
  {
    q: "変数の型を取得する関数はどれですか?",
    options: ["type()", "gettype()", "typeof()", "vartype()"],
    correct: 1,
    explanations: [
      "type(): PHPには存在しない関数です",
      "gettype(): 正解。変数の型を取得します",
      "typeof(): JavaScriptの演算子です",
      "vartype(): PHPには存在しない関数です"
    ]
  }
];

let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let questionsOrder = [];

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function initExam() {
  currentQuestion = 0;
  userAnswers = new Array(questions.length).fill(null);
  score = 0;
  questionsOrder = shuffleArray([...Array(questions.length).keys()]);
  
  questions.forEach((q, i) => {
    const indices = [0, 1, 2, 3];
    const shuffled = shuffleArray(indices);
    questions[i].shuffledOptions = shuffled.map(idx => ({
      text: q.options[idx],
      isCorrect: idx === q.correct,
      explanation: q.explanations[idx]
    }));
  });
  
  showQuestion();
  document.getElementById('examScreen').style.display = 'block';
  document.getElementById('resultScreen').style.display = 'none';
}

function showQuestion() {
  const questionIndex = questionsOrder[currentQuestion];
  const question = questions[questionIndex];
  
  document.getElementById('questionNumber').textContent = 
    `問題 ${currentQuestion + 1}/40`;
  document.getElementById('questionText').textContent = question.q;
  
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';
  
  question.shuffledOptions.forEach((option, i) => {
    const label = document.createElement('label');
    label.className = 'option-label';
    
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'answer';
    radio.value = i;
    
    if (userAnswers[currentQuestion] === i) {
      radio.checked = true;
    }
    
    const span = document.createElement('span');
    span.className = 'option-text';
    span.textContent = option.text;
    
    label.appendChild(radio);
    label.appendChild(span);
    optionsContainer.appendChild(label);
  });
  
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById('progressBar').style.width = progressPercent + '%';
  
  document.getElementById('prevBtn').disabled = currentQuestion === 0;
}

document.getElementById('answerBtn').addEventListener('click', () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  
  if (!selected) {
    alert('選択肢を選んでください');
    return;
  }
  
  const questionIndex = questionsOrder[currentQuestion];
  const question = questions[questionIndex];
  const selectedIndex = parseInt(selected.value);
  const selectedOption = question.shuffledOptions[selectedIndex];
  
  userAnswers[currentQuestion] = selectedIndex;
  
  const modal = document.getElementById('modal');
  const modalHeader = document.getElementById('modalHeader');
  const modalBody = document.getElementById('modalBody');
  
  if (selectedOption.isCorrect) {
    modalHeader.innerHTML = '<span class="correct">✓ 正解!</span>';
    score += 2.5;
  } else {
    modalHeader.innerHTML = '<span class="incorrect">✗ 不正解</span>';
  }
  
  let bodyHTML = '<div class="explanation">';
  bodyHTML += '<div class="explanation-title">各選択肢の解説:</div>';
  
  question.shuffledOptions.forEach((opt, i) => {
    const prefix = opt.isCorrect ? '✓ ' : '✗ ';
    const style = opt.isCorrect ? 'color: #28a745; font-weight: bold;' : '';
    bodyHTML += `<div class="option-explanation"><span style="${style}">${prefix}${opt.text}</span><br>${opt.explanation}</div>`;
  });
  
  bodyHTML += '</div>';
  modalBody.innerHTML = bodyHTML;
  
  modal.style.display = 'flex';
});

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResult();
  }
});

document.getElementById('restartBtn').addEventListener('click', () => {
  initExam();
});

function showResult() {
  document.getElementById('examScreen').style.display = 'none';
  document.getElementById('resultScreen').style.display = 'block';
  
  document.getElementById('finalScore').textContent = score.toFixed(1) + ' 点';
  
  let message = '';
  if (score >= 80) {
    message = '素晴らしい!合格です!🎉';
  } else if (score >= 60) {
    message = '惜しい!もう少しで合格です。';
  } else {
    message = '引き続き学習を頑張りましょう!';
  }
  
  document.getElementById('resultMessage').textContent = message;
}

initExam();