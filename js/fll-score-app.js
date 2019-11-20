(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'fll-score-app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'fll-score-app'.");
    }
    if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'fll-score-app'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'fll-score-app'.");
    }
    root['fll-score-app'] = factory(typeof this['fll-score-app'] === 'undefined' ? {} : this['fll-score-app'], kotlin, this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var getKClass = Kotlin.getKClass;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var toString = Kotlin.toString;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var Unit = Kotlin.kotlin.Unit;
  var span = $module$kotlinx_html_js.kotlinx.html.js.span_x24v7w$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var input = $module$kotlinx_html_js.kotlinx.html.js.input_x8a5sv$;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var div = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var Pair = Kotlin.kotlin.Pair;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toMap = Kotlin.kotlin.collections.toMap_ah2ab9$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var linkedStringMapOf = Kotlin.kotlin.collections.linkedStringMapOf_gkrhic$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  function HtmlFactory() {
    HtmlFactory_instance = this;
  }
  HtmlFactory.prototype.createFor_b8g645$ = function ($receiver, missionPart) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    println(Kotlin.getKClassFromExpression(missionPart));
    println(getKClass(CheckBoxMissionPart));
    println((tmp$ = getKClass(CheckBoxMissionPart)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(missionPart)) : null);
    tmp$_0 = Kotlin.getKClassFromExpression(missionPart);
    if (equals(tmp$_0, getKClass(CheckBoxMissionPart))) {
      this.createFor_0($receiver, Kotlin.isType(tmp$_1 = missionPart, CheckBoxMissionPart) ? tmp$_1 : throwCCE());
    }
     else if (equals(tmp$_0, getKClass(SliderMissionPart))) {
      this.createFor_1($receiver, Kotlin.isType(tmp$_2 = missionPart, SliderMissionPart) ? tmp$_2 : throwCCE());
    }
     else
      throw RuntimeException_init('MissionPart type not implemented in factory: ' + toString(Kotlin.getKClassFromExpression(missionPart)));
  };
  function HtmlFactory$createFor$lambda$lambda(closure$missionPart) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$missionPart.description);
      return Unit;
    };
  }
  function HtmlFactory$createFor$lambda$lambda_0($receiver) {
    $receiver.type = InputType.checkBox;
    return Unit;
  }
  function HtmlFactory$createFor$lambda(closure$missionPart, this$createFor) {
    return function ($receiver) {
      span(this$createFor, void 0, HtmlFactory$createFor$lambda$lambda(closure$missionPart));
      var $receiver_0 = input(this$createFor, void 0, void 0, void 0, void 0, void 0, HtmlFactory$createFor$lambda$lambda_0);
      var state = closure$missionPart.completed;
      var tmp$, tmp$_0;
      if (equals($receiver_0.type, InputType.checkBox.realValue) && ((tmp$ = PrimitiveClasses$booleanClass) != null ? tmp$.equals(PrimitiveClasses$booleanClass) : null)) {
        bindToInputCheckBox($receiver_0, state);
      }
       else if (equals($receiver_0.type, InputType.range.realValue) && ((tmp$_0 = PrimitiveClasses$booleanClass) != null ? tmp$_0.equals(PrimitiveClasses$intClass) : null)) {
        bindToInputRange($receiver_0, state);
      }
      return Unit;
    };
  }
  HtmlFactory.prototype.createFor_0 = function ($receiver, missionPart) {
    div($receiver, 'flex-row mission-row', HtmlFactory$createFor$lambda(missionPart, $receiver));
  };
  function HtmlFactory$createFor$lambda$lambda_1(closure$missionPart) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$missionPart.description);
      return Unit;
    };
  }
  function HtmlFactory$createFor$lambda$lambda_2(closure$missionPart) {
    return function ($receiver) {
      $receiver.type = InputType.range;
      $receiver.min = closure$missionPart.min.toString();
      $receiver.max = closure$missionPart.max.toString();
      $receiver.step = (1).toString();
      return Unit;
    };
  }
  function HtmlFactory$createFor$lambda_0(closure$missionPart, this$createFor) {
    return function ($receiver) {
      span(this$createFor, void 0, HtmlFactory$createFor$lambda$lambda_1(closure$missionPart));
      var $receiver_0 = input(this$createFor, void 0, void 0, void 0, void 0, void 0, HtmlFactory$createFor$lambda$lambda_2(closure$missionPart));
      var state = closure$missionPart.value;
      var tmp$, tmp$_0;
      if (equals($receiver_0.type, InputType.checkBox.realValue) && ((tmp$ = PrimitiveClasses$intClass) != null ? tmp$.equals(PrimitiveClasses$booleanClass) : null)) {
        bindToInputCheckBox($receiver_0, state);
      }
       else if (equals($receiver_0.type, InputType.range.realValue) && ((tmp$_0 = PrimitiveClasses$intClass) != null ? tmp$_0.equals(PrimitiveClasses$intClass) : null)) {
        bindToInputRange($receiver_0, state);
      }
      return Unit;
    };
  }
  HtmlFactory.prototype.createFor_1 = function ($receiver, missionPart) {
    div($receiver, 'flex-row mission-row', HtmlFactory$createFor$lambda_0(missionPart, $receiver));
  };
  HtmlFactory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlFactory',
    interfaces: []
  };
  var HtmlFactory_instance = null;
  function HtmlFactory_getInstance() {
    if (HtmlFactory_instance === null) {
      new HtmlFactory();
    }
    return HtmlFactory_instance;
  }
  function Mission(id, name, description, missionParts) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.missionParts = toList(missionParts);
    this.totalScore = new State(0);
    var tmp$;
    for (tmp$ = 0; tmp$ !== missionParts.length; ++tmp$) {
      var element = missionParts[tmp$];
      element.getScore().observe_nrmh93$(Mission_init$lambda$lambda(this));
    }
  }
  function Mission_init$lambda$lambda(this$Mission) {
    return function (previous, new_0) {
      this$Mission.totalScore.update_11rb$(this$Mission.totalScore.getCurrentState() + new_0 - previous | 0);
      return Unit;
    };
  }
  Mission.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mission',
    interfaces: []
  };
  function MissionPart() {
  }
  MissionPart.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MissionPart',
    interfaces: []
  };
  function bindTo$lambda(this$bindTo) {
    return function (f, new_0) {
      this$bindTo.innerText = toString(new_0);
      return Unit;
    };
  }
  function main$lambda(it) {
    return it * 10 | 0;
  }
  function main$lambda$lambda$lambda$lambda$lambda(closure$mission) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$mission.name);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda(closure$mission, this$) {
    return function ($receiver) {
      span(this$, void 0, main$lambda$lambda$lambda$lambda$lambda(closure$mission));
      closure$mission.totalScore.observe_nrmh93$(bindTo$lambda(span(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_0)));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda(closure$mission, this$) {
    return function ($receiver) {
      div(this$, 'flex-row mission-header', main$lambda$lambda$lambda$lambda(closure$mission, this$));
      var $receiver_0 = closure$mission.missionParts;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$_0 = this$;
        HtmlFactory_getInstance().createFor_b8g645$(this$_0, element);
      }
      return Unit;
    };
  }
  function main$lambda$lambda(closure$mission) {
    return function ($receiver) {
      div($receiver, 'flex-column', main$lambda$lambda$lambda(closure$mission, $receiver));
      return Unit;
    };
  }
  function main$lambda_0(closure$mission) {
    return function (it) {
      var missionsSection = document.getElementById('missions');
      var missionPart = new CheckBoxMissionPart('Hello world!', 20);
      return missionsSection != null ? append(missionsSection, main$lambda$lambda(closure$mission)) : null;
    };
  }
  function main(args) {
    println('Hello JavaScript!');
    var part = new CheckBoxMissionPart('Description 1', 100);
    var part2 = new CheckBoxMissionPart('Description 2', 25);
    var part3 = SliderMissionPart_init('Description 3', 0, 6, main$lambda);
    var mission = new Mission('M01', 'Mission 01', 'This is the description of mission one', [part, part2, part3]);
    window.onload = main$lambda_0(mission);
  }
  function CheckBoxMissionPart(description, completionScore) {
    this.description = description;
    this.completionScore_0 = completionScore;
    this.completed = new State(false);
    this.score = new State(0);
    this.completed.observe_nrmh93$(CheckBoxMissionPart_init$lambda(this));
  }
  CheckBoxMissionPart.prototype.getScore = function () {
    return this.score;
  };
  function CheckBoxMissionPart_init$lambda(this$CheckBoxMissionPart) {
    return function (previous, new_0) {
      if (new_0)
        this$CheckBoxMissionPart.score.update_11rb$(this$CheckBoxMissionPart.completionScore_0);
      else
        this$CheckBoxMissionPart.score.update_11rb$(0);
      return Unit;
    };
  }
  CheckBoxMissionPart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CheckBoxMissionPart',
    interfaces: [MissionPart]
  };
  function SliderMissionPart(description, min, max, scoreMap) {
    this.description = description;
    this.min = min;
    this.max = max;
    this.scoreMap = scoreMap;
    this.value = new State(this.min);
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.scoreMap.get_11rb$(this.min)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Invalid value given to get score: ' + this.min).toString());
    }
    this.score = new State(tmp$_0);
    this.value.observe_nrmh93$(SliderMissionPart_init$lambda(this));
  }
  SliderMissionPart.prototype.getScore = function () {
    return this.score;
  };
  function SliderMissionPart_init$lambda(this$SliderMissionPart) {
    return function (f, new_0) {
      var tmp$, tmp$_0;
      println('Value set to ' + new_0);
      tmp$_0 = this$SliderMissionPart.score;
      var tmp$_1;
      if ((tmp$ = this$SliderMissionPart.scoreMap.get_11rb$(new_0)) != null)
        tmp$_1 = tmp$;
      else {
        throw IllegalStateException_init(('Invalid value given to get score: ' + new_0).toString());
      }
      tmp$_0.update_11rb$(tmp$_1);
      return Unit;
    };
  }
  SliderMissionPart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SliderMissionPart',
    interfaces: [MissionPart]
  };
  function SliderMissionPart_init(description, min, max, calculateScore, $this) {
    $this = $this || Object.create(SliderMissionPart.prototype);
    SliderMissionPart.call($this, description, min, max, toMap(map(asSequence(new IntRange(min, max)), SliderMissionPart_init$lambda_0(calculateScore))));
    return $this;
  }
  function SliderMissionPart_init$lambda_0(closure$calculateScore) {
    return function (it) {
      return new Pair(it, closure$calculateScore(it));
    };
  }
  function ApplicationState() {
    ApplicationState_instance = this;
    this.missions = linkedStringMapOf([new Pair('M01', new Mission('M01', 'M01 - Test', 'Dit is een test', [new CheckBoxMissionPart('Check this!', 20)]))]);
  }
  ApplicationState.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ApplicationState',
    interfaces: []
  };
  var ApplicationState_instance = null;
  function ApplicationState_getInstance() {
    if (ApplicationState_instance === null) {
      new ApplicationState();
    }
    return ApplicationState_instance;
  }
  function State(initialState) {
    this.state_0 = initialState;
    this.observers_0 = ArrayList_init();
  }
  State.prototype.update_11rb$ = function (newState) {
    var tmp$;
    tmp$ = this.observers_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(this.state_0, newState);
    }
    this.state_0 = newState;
  };
  State.prototype.getCurrentState = function () {
    return this.state_0;
  };
  State.prototype.observe_nrmh93$ = function (observer) {
    observer(this.getCurrentState(), this.getCurrentState());
    this.observers_0.add_11rb$(observer);
  };
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function StateDelegate(default_0) {
    this.state_0 = new State(default_0);
  }
  StateDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.state_0;
  };
  StateDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateDelegate',
    interfaces: [ReadOnlyProperty]
  };
  var bindTo = defineInlineFunction('fll-score-app.state.bindTo_wgiacx$', wrapFunction(function () {
    var toString = Kotlin.toString;
    var Unit = Kotlin.kotlin.Unit;
    function bindTo$lambda(this$bindTo) {
      return function (f, new_0) {
        this$bindTo.innerText = toString(new_0);
        return Unit;
      };
    }
    return function (T_0, isT, $receiver, state) {
      state.observe_nrmh93$(bindTo$lambda($receiver));
      return $receiver;
    };
  }));
  var bindTo_0 = defineInlineFunction('fll-score-app.state.bindTo_prbxc1$', wrapFunction(function () {
    var InputType = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.InputType;
    var equals = Kotlin.equals;
    var getKClass = Kotlin.getKClass;
    var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
    var bindToInputCheckBox = _.state.bindToInputCheckBox_m14o6e$;
    var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
    var bindToInputRange = _.state.bindToInputRange_fcy6pt$;
    return function (T_0, isT, $receiver, state) {
      var tmp$, tmp$_0;
      if (equals($receiver.type, InputType.checkBox.realValue) && ((tmp$ = getKClass(T_0)) != null ? tmp$.equals(PrimitiveClasses$booleanClass) : null)) {
        return bindToInputCheckBox($receiver, state);
      }
       else if (equals($receiver.type, InputType.range.realValue) && ((tmp$_0 = getKClass(T_0)) != null ? tmp$_0.equals(PrimitiveClasses$intClass) : null)) {
        return bindToInputRange($receiver, state);
      }
      return $receiver;
    };
  }));
  function bindToInputRange$lambda(closure$state, this$bindToInputRange) {
    return function (event) {
      if (event.isTrusted) {
        closure$state.update_11rb$(toInt(this$bindToInputRange.value));
      }
      return Unit;
    };
  }
  function bindToInputRange$lambda_0(this$bindToInputRange) {
    return function (f, new_0) {
      this$bindToInputRange.value = new_0.toString();
      return Unit;
    };
  }
  function bindToInputRange($receiver, state) {
    $receiver.onchange = bindToInputRange$lambda(state, $receiver);
    state.observe_nrmh93$(bindToInputRange$lambda_0($receiver));
    return $receiver;
  }
  function bindToInputCheckBox$lambda(closure$state, this$bindToInputCheckBox) {
    return function (event) {
      if (event.isTrusted) {
        closure$state.update_11rb$(this$bindToInputCheckBox.checked);
      }
      return Unit;
    };
  }
  function bindToInputCheckBox$lambda_0(this$bindToInputCheckBox) {
    return function (f, new_0) {
      this$bindToInputCheckBox.checked = new_0;
      return Unit;
    };
  }
  function bindToInputCheckBox($receiver, state) {
    $receiver.onchange = bindToInputCheckBox$lambda(state, $receiver);
    state.observe_nrmh93$(bindToInputCheckBox$lambda_0($receiver));
    return $receiver;
  }
  $$importsForInline$$['fll-score-app'] = _;
  var package$factory = _.factory || (_.factory = {});
  Object.defineProperty(package$factory, 'HtmlFactory', {
    get: HtmlFactory_getInstance
  });
  var package$mission = _.mission || (_.mission = {});
  package$mission.Mission = Mission;
  package$mission.MissionPart = MissionPart;
  package$mission.main_kand9s$ = main;
  var package$parts = package$mission.parts || (package$mission.parts = {});
  package$parts.CheckBoxMissionPart = CheckBoxMissionPart;
  package$parts.SliderMissionPart_init_archxs$ = SliderMissionPart_init;
  package$parts.SliderMissionPart = SliderMissionPart;
  var package$state = _.state || (_.state = {});
  Object.defineProperty(package$state, 'ApplicationState', {
    get: ApplicationState_getInstance
  });
  package$state.State = State;
  package$state.StateDelegate = StateDelegate;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$state.bindToInputCheckBox_m14o6e$ = bindToInputCheckBox;
  package$state.bindToInputRange_fcy6pt$ = bindToInputRange;
  main([]);
  Kotlin.defineModule('fll-score-app', _);
  return _;
}));

//# sourceMappingURL=fll-score-app.js.map
