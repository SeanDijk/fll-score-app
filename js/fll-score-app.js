(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-html-js', 'kotlinx-serialization-kotlinx-serialization-runtime'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-html-js'), require('kotlinx-serialization-kotlinx-serialization-runtime'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'fll-score-app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'fll-score-app'.");
    }
    if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'fll-score-app'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'fll-score-app'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined') {
      throw new Error("Error loading module 'fll-score-app'. Its dependency 'kotlinx-serialization-kotlinx-serialization-runtime' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-runtime' is loaded prior to 'fll-score-app'.");
    }
    root['fll-score-app'] = factory(typeof this['fll-score-app'] === 'undefined' ? {} : this['fll-score-app'], kotlin, this['kotlinx-html-js'], this['kotlinx-serialization-kotlinx-serialization-runtime']);
  }
}(this, function (_, Kotlin, $module$kotlinx_html_js, $module$kotlinx_serialization_kotlinx_serialization_runtime) {
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
  var input_0 = $module$kotlinx_html_js.kotlinx.html.js.input_x8a5sv$;
  var Boolean_0 = Boolean;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var div = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var Int = Number;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal;
  var LinkedHashMapSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.LinkedHashMapSerializer;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnknownFieldException;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.MissingFieldException;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var Pair = Kotlin.kotlin.Pair;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toMap = Kotlin.kotlin.collections.toMap_ah2ab9$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var linkedStringMapOf = Kotlin.kotlin.collections.linkedStringMapOf_gkrhic$;
  var PrimitiveClasses$functionClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.functionClass;
  var PolymorphicSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.PolymorphicSerializer;
  var ArrayListSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.ArrayListSerializer;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  function bindTo$lambda(typeClosure$T, isT) {
    return function (s) {
      var tmp$;
      return isT(tmp$ = toInt(s)) ? tmp$ : throwCCE();
    };
  }
  function bindTo$lambda_0(t) {
    return toString(t);
  }
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
      var $receiver_0 = input_0(this$createFor, void 0, void 0, void 0, void 0, void 0, HtmlFactory$createFor$lambda$lambda_0);
      var state = closure$missionPart.completed;
      bindTo$break: do {
        var tmp$, tmp$_0, tmp$_1;
        if (equals($receiver_0.type, InputType.checkBox.realValue) && ((tmp$ = PrimitiveClasses$booleanClass) != null ? tmp$.equals(PrimitiveClasses$booleanClass) : null)) {
          bindToInputCheckBox($receiver_0, state);
          break bindTo$break;
        }
         else if (equals($receiver_0.type, InputType.range.realValue) && ((tmp$_0 = PrimitiveClasses$booleanClass) != null ? tmp$_0.equals(PrimitiveClasses$intClass) : null)) {
          bindToInputRange($receiver_0, state);
          break bindTo$break;
        }
         else if (equals($receiver_0.type, InputType.number.realValue) && ((tmp$_1 = PrimitiveClasses$booleanClass) != null ? tmp$_1.equals(PrimitiveClasses$intClass) : null)) {
          bindToInputTextField($receiver_0, state, bindTo$lambda(Boolean_0, Kotlin.isTypeOf('boolean')), bindTo$lambda_0);
          break bindTo$break;
        }
        throw RuntimeException_init('Not defined how to bind to this type! type: ' + $receiver_0.type);
      }
       while (false);
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
  function HtmlFactory$createFor$lambda$lambda_2($receiver) {
    return Unit;
  }
  function HtmlFactory$createFor$lambda$lambda_3(closure$missionPart) {
    return function ($receiver) {
      $receiver.type = InputType.number;
      $receiver.min = closure$missionPart.min.toString();
      $receiver.max = closure$missionPart.max.toString();
      $receiver.step = (1).toString();
      return Unit;
    };
  }
  function HtmlFactory$createFor$lambda$lambda_4(closure$missionPart) {
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
      div(this$createFor, 'flex-filler', HtmlFactory$createFor$lambda$lambda_2);
      var $receiver_0 = input_0(this$createFor, void 0, void 0, void 0, void 0, void 0, HtmlFactory$createFor$lambda$lambda_3(closure$missionPart));
      var state = closure$missionPart.value;
      bindTo$break: do {
        var tmp$, tmp$_0, tmp$_1;
        if (equals($receiver_0.type, InputType.checkBox.realValue) && ((tmp$ = PrimitiveClasses$intClass) != null ? tmp$.equals(PrimitiveClasses$booleanClass) : null)) {
          bindToInputCheckBox($receiver_0, state);
          break bindTo$break;
        }
         else if (equals($receiver_0.type, InputType.range.realValue) && ((tmp$_0 = PrimitiveClasses$intClass) != null ? tmp$_0.equals(PrimitiveClasses$intClass) : null)) {
          bindToInputRange($receiver_0, state);
          break bindTo$break;
        }
         else if (equals($receiver_0.type, InputType.number.realValue) && ((tmp$_1 = PrimitiveClasses$intClass) != null ? tmp$_1.equals(PrimitiveClasses$intClass) : null)) {
          bindToInputTextField($receiver_0, state, bindTo$lambda(Int, Kotlin.isTypeOf('number')), bindTo$lambda_0);
          break bindTo$break;
        }
        throw RuntimeException_init('Not defined how to bind to this type! type: ' + $receiver_0.type);
      }
       while (false);
      var $receiver_1 = input_0(this$createFor, void 0, void 0, void 0, void 0, void 0, HtmlFactory$createFor$lambda$lambda_4(closure$missionPart));
      var state_0 = closure$missionPart.value;
      bindTo$break: do {
        var tmp$_2, tmp$_3, tmp$_4;
        if (equals($receiver_1.type, InputType.checkBox.realValue) && ((tmp$_2 = PrimitiveClasses$intClass) != null ? tmp$_2.equals(PrimitiveClasses$booleanClass) : null)) {
          bindToInputCheckBox($receiver_1, state_0);
          break bindTo$break;
        }
         else if (equals($receiver_1.type, InputType.range.realValue) && ((tmp$_3 = PrimitiveClasses$intClass) != null ? tmp$_3.equals(PrimitiveClasses$intClass) : null)) {
          bindToInputRange($receiver_1, state_0);
          break bindTo$break;
        }
         else if (equals($receiver_1.type, InputType.number.realValue) && ((tmp$_4 = PrimitiveClasses$intClass) != null ? tmp$_4.equals(PrimitiveClasses$intClass) : null)) {
          bindToInputTextField($receiver_1, state_0, bindTo$lambda(Int, Kotlin.isTypeOf('number')), bindTo$lambda_0);
          break bindTo$break;
        }
        throw RuntimeException_init('Not defined how to bind to this type! type: ' + $receiver_1.type);
      }
       while (false);
      return Unit;
    };
  }
  HtmlFactory.prototype.createFor_1 = function ($receiver, missionPart) {
    div($receiver, 'flex-row mission-row', HtmlFactory$createFor$lambda_0(missionPart, $receiver));
  };
  function HtmlFactory$createFor$lambda$lambda_5(closure$missionPart) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$missionPart.description);
      return Unit;
    };
  }
  function HtmlFactory$createFor$lambda$lambda_6($receiver) {
    $receiver.type = InputType.checkBox;
    return Unit;
  }
  function HtmlFactory$createFor$lambda_1(closure$missionPart, this$createFor) {
    return function ($receiver) {
      span(this$createFor, void 0, HtmlFactory$createFor$lambda$lambda_5(closure$missionPart));
      var $receiver_0 = input_0(this$createFor, void 0, void 0, void 0, void 0, void 0, HtmlFactory$createFor$lambda$lambda_6);
      var state = closure$missionPart.completed;
      bindTo$break: do {
        var tmp$, tmp$_0, tmp$_1;
        if (equals($receiver_0.type, InputType.checkBox.realValue) && ((tmp$ = PrimitiveClasses$booleanClass) != null ? tmp$.equals(PrimitiveClasses$booleanClass) : null)) {
          bindToInputCheckBox($receiver_0, state);
          break bindTo$break;
        }
         else if (equals($receiver_0.type, InputType.range.realValue) && ((tmp$_0 = PrimitiveClasses$booleanClass) != null ? tmp$_0.equals(PrimitiveClasses$intClass) : null)) {
          bindToInputRange($receiver_0, state);
          break bindTo$break;
        }
         else if (equals($receiver_0.type, InputType.number.realValue) && ((tmp$_1 = PrimitiveClasses$booleanClass) != null ? tmp$_1.equals(PrimitiveClasses$intClass) : null)) {
          bindToInputTextField($receiver_0, state, bindTo$lambda(Boolean_0, Kotlin.isTypeOf('boolean')), bindTo$lambda_0);
          break bindTo$break;
        }
        throw RuntimeException_init('Not defined how to bind to this type! type: ' + $receiver_0.type);
      }
       while (false);
      return Unit;
    };
  }
  HtmlFactory.prototype.createFor_2 = function ($receiver, missionPart) {
    div($receiver, 'flex-row mission-row', HtmlFactory$createFor$lambda_1(missionPart, $receiver));
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
  function Challenge(name, missions) {
    Challenge$Companion_getInstance();
    this.name = name;
    this.missions = missions;
  }
  function Challenge$Companion() {
    Challenge$Companion_instance = this;
  }
  Challenge$Companion.prototype.fromConfiguration = function () {
  };
  Challenge$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Challenge$Companion_instance = null;
  function Challenge$Companion_getInstance() {
    if (Challenge$Companion_instance === null) {
      new Challenge$Companion();
    }
    return Challenge$Companion_instance;
  }
  Challenge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Challenge',
    interfaces: []
  };
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
  function bindTo$lambda_1(this$bindTo) {
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
      closure$mission.totalScore.observe_nrmh93$(bindTo$lambda_1(span(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_0)));
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
    var part3 = SliderMissionPart_init_0('Description 3', 0, 6, main$lambda);
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
  function ExtraPointsForAllCompletedMissionPart(description, scorePerCompletion, myMission, missions) {
    this.description = description;
    this.scorePerCompletion = scorePerCompletion;
    this.myMission = myMission;
    this.missions = missions;
    this.score = new State(0);
    this.backingScore_0 = 0;
    this.completed = new State(false);
    this.completed.observe_nrmh93$(ExtraPointsForAllCompletedMissionPart_init$lambda(this));
    var tmp$;
    tmp$ = this.missions.iterator();
    loop_label: while (tmp$.hasNext()) {
      var element = tmp$.next();
      action$break: do {
        if (equals(element, this.myMission))
          break action$break;
        element.totalScore.observe_nrmh93$(ExtraPointsForAllCompletedMissionPart_init$lambda$lambda(this));
      }
       while (false);
    }
  }
  ExtraPointsForAllCompletedMissionPart.prototype.getScore = function () {
    return this.score;
  };
  function ExtraPointsForAllCompletedMissionPart_init$lambda(this$ExtraPointsForAllCompletedMissionPart) {
    return function (previous, new_0) {
      if (new_0) {
        this$ExtraPointsForAllCompletedMissionPart.score.update_11rb$(this$ExtraPointsForAllCompletedMissionPart.backingScore_0);
      }
       else {
        this$ExtraPointsForAllCompletedMissionPart.score.update_11rb$(0);
      }
      return Unit;
    };
  }
  function ExtraPointsForAllCompletedMissionPart_init$lambda$lambda(this$ExtraPointsForAllCompletedMissionPart) {
    return function (previous, new_0) {
      if (previous === 0 && new_0 > 0) {
        this$ExtraPointsForAllCompletedMissionPart.backingScore_0 = this$ExtraPointsForAllCompletedMissionPart.backingScore_0 + this$ExtraPointsForAllCompletedMissionPart.scorePerCompletion | 0;
      }
       else if (previous > 0 && new_0 === 0) {
        this$ExtraPointsForAllCompletedMissionPart.backingScore_0 = this$ExtraPointsForAllCompletedMissionPart.backingScore_0 - this$ExtraPointsForAllCompletedMissionPart.scorePerCompletion | 0;
      }
      return Unit;
    };
  }
  ExtraPointsForAllCompletedMissionPart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExtraPointsForAllCompletedMissionPart',
    interfaces: [MissionPart]
  };
  function SliderMissionPart(description, min, max, scoreMap) {
    SliderMissionPart$Companion_getInstance();
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
  function SliderMissionPart$Companion() {
    SliderMissionPart$Companion_instance = this;
  }
  SliderMissionPart$Companion.prototype.serializer = function () {
    return SliderMissionPart$$serializer_getInstance();
  };
  SliderMissionPart$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SliderMissionPart$Companion_instance = null;
  function SliderMissionPart$Companion_getInstance() {
    if (SliderMissionPart$Companion_instance === null) {
      new SliderMissionPart$Companion();
    }
    return SliderMissionPart$Companion_instance;
  }
  function SliderMissionPart$$serializer() {
    this.descriptor_men33n$_0 = new SerialClassDescImpl('mission.parts.SliderMissionPart', this);
    this.descriptor.addElement_ivxn3r$('description', false);
    this.descriptor.addElement_ivxn3r$('min', false);
    this.descriptor.addElement_ivxn3r$('max', false);
    this.descriptor.addElement_ivxn3r$('scoreMap', false);
    this.descriptor.addElement_ivxn3r$('value', true);
    this.descriptor.addElement_ivxn3r$('score', true);
    SliderMissionPart$$serializer_instance = this;
  }
  Object.defineProperty(SliderMissionPart$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_men33n$_0;
    }
  });
  SliderMissionPart$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = this.scoreMap.get_11rb$(this.min)) != null)
      tmp$_1 = tmp$;
    else {
      throw IllegalStateException_init(('Invalid value given to get score: ' + this.min).toString());
    }
    tmp$_0 = tmp$_1;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.description);
    output.encodeIntElement_4wpqag$(this.descriptor, 1, obj.min);
    output.encodeIntElement_4wpqag$(this.descriptor, 2, obj.max);
    output.encodeSerializableElement_blecud$(this.descriptor, 3, new LinkedHashMapSerializer(internal.IntSerializer, internal.IntSerializer), obj.scoreMap);
    if (!equals(obj.value, new State(this.min)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 4))
      output.encodeSerializableElement_blecud$(this.descriptor, 4, State$State$$serializer_init(internal.IntSerializer), obj.value);
    if (!equals(obj.score, new State(tmp$_0)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 5))
      output.encodeSerializableElement_blecud$(this.descriptor, 5, State$State$$serializer_init(internal.IntSerializer), obj.score);
    output.endStructure_qatsm0$(this.descriptor);
  };
  SliderMissionPart$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeIntElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeIntElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, new LinkedHashMapSerializer(internal.IntSerializer, internal.IntSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, new LinkedHashMapSerializer(internal.IntSerializer, internal.IntSerializer), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 4, State$State$$serializer_init(internal.IntSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 4, State$State$$serializer_init(internal.IntSerializer), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = (bitMask0 & 32) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 5, State$State$$serializer_init(internal.IntSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 5, State$State$$serializer_init(internal.IntSerializer), local5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return SliderMissionPart_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  SliderMissionPart$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.IntSerializer, internal.IntSerializer, new LinkedHashMapSerializer(internal.IntSerializer, internal.IntSerializer), State$State$$serializer_init(internal.IntSerializer), State$State$$serializer_init(internal.IntSerializer)];
  };
  SliderMissionPart$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var SliderMissionPart$$serializer_instance = null;
  function SliderMissionPart$$serializer_getInstance() {
    if (SliderMissionPart$$serializer_instance === null) {
      new SliderMissionPart$$serializer();
    }
    return SliderMissionPart$$serializer_instance;
  }
  function SliderMissionPart_init$lambda(this$SliderMissionPart) {
    return function (f, new_1, f_0, new_2) {
      var tmp$_2, tmp$_3;
      println('Value set to ' + new_1);
      tmp$_3 = this$SliderMissionPart.score;
      var tmp$_4;
      if ((tmp$_2 = this$SliderMissionPart.scoreMap.get_11rb$(new_1)) != null)
        tmp$_4 = tmp$_2;
      else {
        throw IllegalStateException_init(('Invalid value given to get score: ' + new_1).toString());
      }
      tmp$_3.update_11rb$(tmp$_4);
      return Unit;
    };
  }
  function SliderMissionPart_init(seen1, description, min, max, scoreMap, value, score, serializationConstructorMarker) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = $this.scoreMap.get_11rb$($this.min)) != null)
      tmp$_1 = tmp$;
    else {
      throw IllegalStateException_init(('Invalid value given to get score: ' + $this.min).toString());
    }
    tmp$_0 = tmp$_1;
    var $this = serializationConstructorMarker || Object.create(SliderMissionPart.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('description');
    else
      $this.description = description;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('min');
    else
      $this.min = min;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('max');
    else
      $this.max = max;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('scoreMap');
    else
      $this.scoreMap = scoreMap;
    if ((seen1 & 16) === 0)
      $this.value = new State($this.min);
    else
      $this.value = value;
    if ((seen1 & 32) === 0)
      $this.score = new State(tmp$_0);
    else
      $this.score = score;
    $this.value.observe_nrmh93$(SliderMissionPart_init$lambda($this));
    return $this;
  }
  function SliderMissionPart_init$lambda(this$SliderMissionPart_0) {
    return function (f, new_1, f_0, new_2) {
      var tmp$_2, tmp$_3;
      println('Value set to ' + new_1);
      tmp$_3 = this$SliderMissionPart.score;
      var tmp$_4;
      if ((tmp$_2 = this$SliderMissionPart.scoreMap.get_11rb$(new_1)) != null)
        tmp$_4 = tmp$_2;
      else {
        throw IllegalStateException_init(('Invalid value given to get score: ' + new_1).toString());
      }
      tmp$_3.update_11rb$(tmp$_4);
      return Unit;
    };
  }
  SliderMissionPart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SliderMissionPart',
    interfaces: [MissionPart]
  };
  function SliderMissionPart_init_0(description, min, max, calculateScore, $this) {
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
  function State(state) {
    State$Companion_getInstance();
    this.state_0 = state;
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
  function State$Companion() {
    State$Companion_instance = this;
  }
  State$Companion.prototype.serializer_swdriu$ = function (typeSerial0) {
    return State$State$$serializer_init(typeSerial0);
  };
  State$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var State$Companion_instance = null;
  function State$Companion_getInstance() {
    if (State$Companion_instance === null) {
      new State$Companion();
    }
    return State$Companion_instance;
  }
  function State$$serializer() {
    this.descriptor_o4mjs7$_0 = new SerialClassDescImpl('state.State', this);
    this.descriptor.addElement_ivxn3r$('state', false);
    this.descriptor.addElement_ivxn3r$('observers', true);
  }
  Object.defineProperty(State$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_o4mjs7$_0;
    }
  });
  State$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, [this.typeSerial0]);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, this.typeSerial0, obj.state_0);
    if (!equals(obj.observers_0, ArrayList_init()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeSerializableElement_blecud$(this.descriptor, 1, new ArrayListSerializer(new PolymorphicSerializer(PrimitiveClasses$functionClass(2))), obj.observers_0);
    output.endStructure_qatsm0$(this.descriptor);
  };
  State$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, [this.typeSerial0]);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, this.typeSerial0) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, this.typeSerial0, local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new ArrayListSerializer(new PolymorphicSerializer(PrimitiveClasses$functionClass(2)))) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new ArrayListSerializer(new PolymorphicSerializer(PrimitiveClasses$functionClass(2))), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return State_init(bitMask0, local0, local1, null);
  };
  State$$serializer.prototype.childSerializers = function () {
    return [this.typeSerial0, new ArrayListSerializer(new PolymorphicSerializer(PrimitiveClasses$functionClass(2)))];
  };
  function State$State$$serializer_init(typeSerial0) {
    var $this = new State$$serializer();
    $this.typeSerial0 = typeSerial0;
    return $this;
  }
  State$$serializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  function State_init(seen1, state, observers, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(State.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('state');
    else
      $this.state_0 = state;
    if ((seen1 & 2) === 0) {
      $this.observers_0 = ArrayList_init();
    }
     else
      $this.observers_0 = observers;
    return $this;
  }
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
  function whenConditionIsMet$lambda(closure$condition, closure$oldOnChange) {
    return function (event) {
      if (closure$condition(event)) {
        closure$oldOnChange(event);
      }
      return Unit;
    };
  }
  function whenConditionIsMet($receiver, condition) {
    var tmp$;
    tmp$ = $receiver.onchange;
    if (tmp$ == null) {
      throw RuntimeException_init('There is no onchange method set!');
    }
    var oldOnChange = tmp$;
    $receiver.onchange = whenConditionIsMet$lambda(condition, oldOnChange);
    return $receiver;
  }
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
    var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
    var throwCCE = Kotlin.throwCCE;
    var toString = Kotlin.toString;
    var bindToInputTextField = _.state.bindToInputTextField_cqrbjb$;
    var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
    function bindTo$lambda(typeClosure$T, isT) {
      return function (s) {
        var tmp$;
        return isT(tmp$ = toInt(s)) ? tmp$ : throwCCE();
      };
    }
    function bindTo$lambda_0(t) {
      return toString(t);
    }
    return function (T_0, isT, $receiver, state) {
      var tmp$, tmp$_0, tmp$_1;
      if (equals($receiver.type, InputType.checkBox.realValue) && ((tmp$ = getKClass(T_0)) != null ? tmp$.equals(PrimitiveClasses$booleanClass) : null)) {
        return bindToInputCheckBox($receiver, state);
      }
       else if (equals($receiver.type, InputType.range.realValue) && ((tmp$_0 = getKClass(T_0)) != null ? tmp$_0.equals(PrimitiveClasses$intClass) : null)) {
        return bindToInputRange($receiver, state);
      }
       else if (equals($receiver.type, InputType.number.realValue) && ((tmp$_1 = getKClass(T_0)) != null ? tmp$_1.equals(PrimitiveClasses$intClass) : null)) {
        return bindToInputTextField($receiver, state, bindTo$lambda(T_0, isT), bindTo$lambda_0);
      }
      throw RuntimeException_init('Not defined how to bind to this type! type: ' + $receiver.type);
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
  function bindToInputTextField$lambda(closure$state, closure$stringToT, this$bindToInputTextField) {
    return function (event) {
      if (event.isTrusted) {
        closure$state.update_11rb$(closure$stringToT(this$bindToInputTextField.value));
      }
      return Unit;
    };
  }
  function bindToInputTextField$lambda_0(closure$stringFromT, this$bindToInputTextField) {
    return function (f, new_0) {
      this$bindToInputTextField.value = closure$stringFromT(new_0);
      return Unit;
    };
  }
  function bindToInputTextField($receiver, state, stringToT, stringFromT) {
    $receiver.onchange = bindToInputTextField$lambda(state, stringToT, $receiver);
    state.observe_nrmh93$(bindToInputTextField$lambda_0(stringFromT, $receiver));
    return $receiver;
  }
  $$importsForInline$$['fll-score-app'] = _;
  var package$factory = _.factory || (_.factory = {});
  Object.defineProperty(package$factory, 'HtmlFactory', {
    get: HtmlFactory_getInstance
  });
  Object.defineProperty(Challenge, 'Companion', {
    get: Challenge$Companion_getInstance
  });
  var package$mission = _.mission || (_.mission = {});
  package$mission.Challenge = Challenge;
  package$mission.Mission = Mission;
  package$mission.MissionPart = MissionPart;
  package$mission.main_kand9s$ = main;
  var package$parts = package$mission.parts || (package$mission.parts = {});
  package$parts.CheckBoxMissionPart = CheckBoxMissionPart;
  package$parts.ExtraPointsForAllCompletedMissionPart = ExtraPointsForAllCompletedMissionPart;
  Object.defineProperty(SliderMissionPart, 'Companion', {
    get: SliderMissionPart$Companion_getInstance
  });
  Object.defineProperty(SliderMissionPart, '$serializer', {
    get: SliderMissionPart$$serializer_getInstance
  });
  package$parts.SliderMissionPart_init_iq4g83$ = SliderMissionPart_init;
  package$parts.SliderMissionPart_init_archxs$ = SliderMissionPart_init_0;
  package$parts.SliderMissionPart = SliderMissionPart;
  var package$state = _.state || (_.state = {});
  Object.defineProperty(package$state, 'ApplicationState', {
    get: ApplicationState_getInstance
  });
  Object.defineProperty(State, 'Companion', {
    get: State$Companion_getInstance
  });
  State.$serializer = State$$serializer;
  package$state.State_init_h6rwxo$ = State_init;
  package$state.State = State;
  package$state.StateDelegate = StateDelegate;
  package$state.whenConditionIsMet_raybwq$ = whenConditionIsMet;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$state.bindToInputCheckBox_m14o6e$ = bindToInputCheckBox;
  package$state.bindToInputRange_fcy6pt$ = bindToInputRange;
  package$state.bindToInputTextField_cqrbjb$ = bindToInputTextField;
  SliderMissionPart$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  State$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  main([]);
  Kotlin.defineModule('fll-score-app', _);
  return _;
}));

//# sourceMappingURL=fll-score-app.js.map
