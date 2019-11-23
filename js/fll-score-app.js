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
  var Unit = Kotlin.kotlin.Unit;
  var h1 = $module$kotlinx_html_js.kotlinx.html.h1_vmej1w$;
  var div = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var span = $module$kotlinx_html_js.kotlinx.html.js.span_x24v7w$;
  var Int = Number;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var throwCCE = Kotlin.throwCCE;
  var getKClass = Kotlin.getKClass;
  var equals = Kotlin.equals;
  var toString = Kotlin.toString;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var input = $module$kotlinx_html_js.kotlinx.html.js.input_x8a5sv$;
  var Boolean_0 = Boolean;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var kotlin_js_internal_StringCompanionObject = Kotlin.kotlin.js.internal.StringCompanionObject;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.serializer_6eet4j$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var get_list = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.get_list_gekvwj$;
  var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var serializer_0 = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.serializer_qn7glr$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var List = Kotlin.kotlin.collections.List;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.KSerializer;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var PolymorphicSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.PolymorphicSerializer;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.json.Json;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var kotlin_js_internal_BooleanCompanionObject = Kotlin.kotlin.js.internal.BooleanCompanionObject;
  var serializer_1 = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.serializer_jtjczu$;
  var Map = Kotlin.kotlin.collections.Map;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var Pair = Kotlin.kotlin.Pair;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toMap = Kotlin.kotlin.collections.toMap_ah2ab9$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal;
  var get_map = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.get_map_kgqhr1$;
  var withName = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.withName_8new1j$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var SerializersModule = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.modules.SerializersModule_q4tcel$;
  var SerializationException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.SerializationException;
  var ensureNotNull = Kotlin.ensureNotNull;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var Any = Object;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var toShort = Kotlin.toShort;
  SerializationHelper$descriptor$ObjectLiteral.prototype = Object.create(SerialClassDescImpl.prototype);
  SerializationHelper$descriptor$ObjectLiteral.prototype.constructor = SerializationHelper$descriptor$ObjectLiteral;
  function bindTo$lambda(this$bindTo) {
    return function (f, new_0) {
      this$bindTo.innerText = new_0.toString();
      return Unit;
    };
  }
  function bindTo$lambda_0(typeClosure$T, isT) {
    return function (s) {
      var tmp$;
      return isT(tmp$ = toInt(s)) ? tmp$ : throwCCE();
    };
  }
  function bindTo$lambda_1(t) {
    return t.toString();
  }
  function HtmlFactory() {
    HtmlFactory_instance = this;
  }
  function HtmlFactory$createFor$lambda$lambda(closure$challenge) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$challenge.name);
      return Unit;
    };
  }
  function HtmlFactory$createFor$lambda(closure$challenge, this$HtmlFactory, this$createFor) {
    return function ($receiver) {
      h1($receiver, void 0, HtmlFactory$createFor$lambda$lambda(closure$challenge));
      var $receiver_0 = closure$challenge.missions;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        this$HtmlFactory.createFor_j02ad4$(this$createFor, element);
      }
      return Unit;
    };
  }
  HtmlFactory.prototype.createFor_8dmwun$ = function ($receiver, challenge) {
    div($receiver, 'flex-column', HtmlFactory$createFor$lambda(challenge, this, $receiver));
  };
  function HtmlFactory$createFor$lambda$lambda$lambda(closure$mission) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$mission.name);
      return Unit;
    };
  }
  function HtmlFactory$createFor$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function HtmlFactory$createFor$lambda$lambda_0(closure$mission, this$createFor) {
    return function ($receiver) {
      span(this$createFor, void 0, HtmlFactory$createFor$lambda$lambda$lambda(closure$mission));
      var $receiver_0 = span(this$createFor, void 0, HtmlFactory$createFor$lambda$lambda$lambda_0);
      closure$mission.totalScore.observe_e2wk6p$(bindTo$lambda($receiver_0));
      return Unit;
    };
  }
  function HtmlFactory$createFor$lambda_0(closure$mission, this$createFor, this$HtmlFactory) {
    return function ($receiver) {
      div(this$createFor, 'flex-row mission-header', HtmlFactory$createFor$lambda$lambda_0(closure$mission, this$createFor));
      var $receiver_0 = closure$mission.missionParts;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        this$HtmlFactory.createFor_b8g645$(this$createFor, element);
      }
      return Unit;
    };
  }
  HtmlFactory.prototype.createFor_j02ad4$ = function ($receiver, mission) {
    div($receiver, 'flex-column', HtmlFactory$createFor$lambda_0(mission, $receiver, this));
  };
  HtmlFactory.prototype.createFor_b8g645$ = function ($receiver, missionPart) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = Kotlin.getKClassFromExpression(missionPart);
    if (equals(tmp$, getKClass(CheckBoxMissionPart))) {
      this.createFor_0($receiver, Kotlin.isType(tmp$_0 = missionPart, CheckBoxMissionPart) ? tmp$_0 : throwCCE());
    }
     else if (equals(tmp$, getKClass(SliderMissionPart))) {
      this.createFor_1($receiver, Kotlin.isType(tmp$_1 = missionPart, SliderMissionPart) ? tmp$_1 : throwCCE());
    }
     else
      throw RuntimeException_init('MissionPart type not implemented in factory: ' + toString(Kotlin.getKClassFromExpression(missionPart)));
  };
  function HtmlFactory$createFor$lambda$lambda_1(closure$missionPart) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$missionPart.description);
      return Unit;
    };
  }
  function HtmlFactory$createFor$lambda$lambda_2($receiver) {
    $receiver.type = InputType.checkBox;
    return Unit;
  }
  function HtmlFactory$createFor$lambda_1(closure$missionPart, this$createFor) {
    return function ($receiver) {
      span(this$createFor, void 0, HtmlFactory$createFor$lambda$lambda_1(closure$missionPart));
      var $receiver_0 = input(this$createFor, void 0, void 0, void 0, void 0, void 0, HtmlFactory$createFor$lambda$lambda_2);
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
          bindToInputTextField($receiver_0, state, bindTo$lambda_0(Boolean_0, Kotlin.isTypeOf('boolean')), bindTo$lambda_1);
          break bindTo$break;
        }
        throw RuntimeException_init('Not defined how to bind to this type! type: ' + $receiver_0.type);
      }
       while (false);
      return Unit;
    };
  }
  HtmlFactory.prototype.createFor_0 = function ($receiver, missionPart) {
    div($receiver, 'flex-row mission-row', HtmlFactory$createFor$lambda_1(missionPart, $receiver));
  };
  function HtmlFactory$createFor$lambda$lambda_3(closure$missionPart) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$missionPart.description);
      return Unit;
    };
  }
  function HtmlFactory$createFor$lambda$lambda_4($receiver) {
    return Unit;
  }
  function HtmlFactory$createFor$lambda$lambda_5(closure$missionPart) {
    return function ($receiver) {
      $receiver.type = InputType.number;
      $receiver.min = closure$missionPart.min.toString();
      $receiver.max = closure$missionPart.max.toString();
      $receiver.step = (1).toString();
      return Unit;
    };
  }
  function HtmlFactory$createFor$lambda$lambda_6(closure$missionPart) {
    return function ($receiver) {
      $receiver.type = InputType.range;
      $receiver.min = closure$missionPart.min.toString();
      $receiver.max = closure$missionPart.max.toString();
      $receiver.step = (1).toString();
      return Unit;
    };
  }
  function HtmlFactory$createFor$lambda_2(closure$missionPart, this$createFor) {
    return function ($receiver) {
      span(this$createFor, void 0, HtmlFactory$createFor$lambda$lambda_3(closure$missionPart));
      div(this$createFor, 'flex-filler', HtmlFactory$createFor$lambda$lambda_4);
      var $receiver_0 = input(this$createFor, void 0, void 0, void 0, void 0, void 0, HtmlFactory$createFor$lambda$lambda_5(closure$missionPart));
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
          bindToInputTextField($receiver_0, state, bindTo$lambda_0(Int, Kotlin.isTypeOf('number')), bindTo$lambda_1);
          break bindTo$break;
        }
        throw RuntimeException_init('Not defined how to bind to this type! type: ' + $receiver_0.type);
      }
       while (false);
      var $receiver_1 = input(this$createFor, void 0, void 0, void 0, void 0, void 0, HtmlFactory$createFor$lambda$lambda_6(closure$missionPart));
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
          bindToInputTextField($receiver_1, state_0, bindTo$lambda_0(Int, Kotlin.isTypeOf('number')), bindTo$lambda_1);
          break bindTo$break;
        }
        throw RuntimeException_init('Not defined how to bind to this type! type: ' + $receiver_1.type);
      }
       while (false);
      return Unit;
    };
  }
  HtmlFactory.prototype.createFor_1 = function ($receiver, missionPart) {
    div($receiver, 'flex-row mission-row', HtmlFactory$createFor$lambda_2(missionPart, $receiver));
  };
  function HtmlFactory$createFor$lambda$lambda_7(closure$missionPart) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$missionPart.description);
      return Unit;
    };
  }
  function HtmlFactory$createFor$lambda$lambda_8($receiver) {
    $receiver.type = InputType.checkBox;
    return Unit;
  }
  function HtmlFactory$createFor$lambda_3(closure$missionPart, this$createFor) {
    return function ($receiver) {
      span(this$createFor, void 0, HtmlFactory$createFor$lambda$lambda_7(closure$missionPart));
      var $receiver_0 = input(this$createFor, void 0, void 0, void 0, void 0, void 0, HtmlFactory$createFor$lambda$lambda_8);
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
          bindToInputTextField($receiver_0, state, bindTo$lambda_0(Boolean_0, Kotlin.isTypeOf('boolean')), bindTo$lambda_1);
          break bindTo$break;
        }
        throw RuntimeException_init('Not defined how to bind to this type! type: ' + $receiver_0.type);
      }
       while (false);
      return Unit;
    };
  }
  HtmlFactory.prototype.createFor_2 = function ($receiver, missionPart) {
    div($receiver, 'flex-row mission-row', HtmlFactory$createFor$lambda_3(missionPart, $receiver));
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
    this.totalChallengeScore = new State(0);
    var tmp$;
    tmp$ = this.missions.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.totalScore.observe_e2wk6p$(Challenge_init$lambda$lambda(this));
    }
  }
  function Challenge$Companion() {
    Challenge$Companion_instance = this;
    this.helper_0 = new SerializationHelper(getKClass(Challenge), hashMapOf([to(0, new HelperHolder('name', serializer(kotlin_js_internal_StringCompanionObject), Challenge$Companion$helper$lambda)), to(1, new HelperHolder('missions', get_list(Mission$Companion_getInstance().serializer()), Challenge$Companion$helper$lambda_0)), to(2, new HelperHolder('totalChallengeScore', new StateSerializer(serializer_0(kotlin_js_internal_IntCompanionObject)), Challenge$Companion$helper$lambda_1))]), Challenge$Companion$helper$lambda_2);
    this.descriptor_q0qacc$_0 = this.helper_0.descriptor;
  }
  Object.defineProperty(Challenge$Companion.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_q0qacc$_0;
    }
  });
  Challenge$Companion.prototype.serialize_awe97i$ = function (encoder, obj) {
    this.helper_0.serialize_awe97i$(encoder, obj);
  };
  Challenge$Companion.prototype.deserialize_nts5qn$ = function (decoder) {
    return this.helper_0.deserialize_nts5qn$(decoder);
  };
  Challenge$Companion.prototype.serializer = function () {
    return Challenge$Companion_getInstance();
  };
  function Challenge$Companion$helper$lambda(it) {
    return it.name;
  }
  function Challenge$Companion$helper$lambda_0(it) {
    return it.missions;
  }
  function Challenge$Companion$helper$lambda_1(it) {
    return it.totalChallengeScore;
  }
  function Challenge$Companion$helper$lambda_2(it) {
    var tmp$, tmp$_0;
    var $receiver = new Challenge(typeof (tmp$ = it.get_11rb$('name')) === 'string' ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = it.get_11rb$('missions'), List) ? tmp$_0 : throwCCE());
    var tmp$_1;
    $receiver.totalChallengeScore.update_trkh7z$((Kotlin.isType(tmp$_1 = it.get_11rb$('totalChallengeScore'), State) ? tmp$_1 : throwCCE()).getCurrentState());
    return $receiver;
  }
  Challenge$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [KSerializer]
  };
  var Challenge$Companion_instance = null;
  function Challenge$Companion_getInstance() {
    if (Challenge$Companion_instance === null) {
      new Challenge$Companion();
    }
    return Challenge$Companion_instance;
  }
  function Challenge_init$lambda$lambda(this$Challenge) {
    return function (previous, new_0) {
      this$Challenge.totalChallengeScore.update_trkh7z$(this$Challenge.totalChallengeScore.getCurrentState() + new_0 - previous | 0);
      return Unit;
    };
  }
  Challenge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Challenge',
    interfaces: []
  };
  function Mission(name, description, missionParts) {
    Mission$Companion_getInstance();
    this.name = name;
    this.description = description;
    this.missionParts = missionParts;
    this.totalScore = new State(0);
    var tmp$;
    tmp$ = this.missionParts.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.getScore().observe_e2wk6p$(Mission_init$lambda$lambda(this));
    }
  }
  function Mission$Companion() {
    Mission$Companion_instance = this;
    this.helper_0 = new SerializationHelper(getKClass(Mission), hashMapOf([to(0, new HelperHolder('name', serializer(kotlin_js_internal_StringCompanionObject), Mission$Companion$helper$lambda)), to(1, new HelperHolder('description', serializer(kotlin_js_internal_StringCompanionObject), Mission$Companion$helper$lambda_0)), to(2, new HelperHolder('missionParts', get_list(new PolymorphicSerializer(getKClass(MissionPart))), Mission$Companion$helper$lambda_1)), to(3, new HelperHolder('totalScore', new StateSerializer(serializer_0(kotlin_js_internal_IntCompanionObject)), Mission$Companion$helper$lambda_2))]), Mission$Companion$helper$lambda_3);
    this.descriptor_bkbtbv$_0 = this.helper_0.descriptor;
  }
  Object.defineProperty(Mission$Companion.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_bkbtbv$_0;
    }
  });
  Mission$Companion.prototype.serialize_awe97i$ = function (encoder, obj) {
    this.helper_0.serialize_awe97i$(encoder, obj);
  };
  Mission$Companion.prototype.deserialize_nts5qn$ = function (decoder) {
    return this.helper_0.deserialize_nts5qn$(decoder);
  };
  Mission$Companion.prototype.serializer = function () {
    return Mission$Companion_getInstance();
  };
  function Mission$Companion$helper$lambda(it) {
    return it.name;
  }
  function Mission$Companion$helper$lambda_0(it) {
    return it.description;
  }
  function Mission$Companion$helper$lambda_1(it) {
    return it.missionParts;
  }
  function Mission$Companion$helper$lambda_2(it) {
    return it.totalScore;
  }
  function Mission$Companion$helper$lambda_3(it) {
    var tmp$, tmp$_0, tmp$_1;
    var $receiver = new Mission(typeof (tmp$ = it.get_11rb$('name')) === 'string' ? tmp$ : throwCCE(), typeof (tmp$_0 = it.get_11rb$('description')) === 'string' ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = it.get_11rb$('missionParts'), List) ? tmp$_1 : throwCCE());
    var tmp$_2;
    $receiver.totalScore.update_trkh7z$((Kotlin.isType(tmp$_2 = it.get_11rb$('totalScore'), State) ? tmp$_2 : throwCCE()).getCurrentState());
    return $receiver;
  }
  Mission$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [KSerializer]
  };
  var Mission$Companion_instance = null;
  function Mission$Companion_getInstance() {
    if (Mission$Companion_instance === null) {
      new Mission$Companion();
    }
    return Mission$Companion_instance;
  }
  function Mission_init$lambda$lambda(this$Mission) {
    return function (previous, new_0) {
      this$Mission.totalScore.update_trkh7z$(this$Mission.totalScore.getCurrentState() + new_0 - previous | 0);
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
  function main$lambda$lambda$lambda(closure$json, this$) {
    return function (it) {
      HtmlFactory_getInstance().createFor_8dmwun$(this$, closure$json.parse_awif5v$(Challenge$Companion_getInstance().serializer(), JSON.stringify(it)));
      return Unit;
    };
  }
  function main$lambda$lambda(closure$json) {
    return function ($receiver) {
      FileUtil_getInstance().loadJSON_a1vqyy$('defaultChallenges/my-test-template.json', main$lambda$lambda$lambda(closure$json, $receiver));
      return Unit;
    };
  }
  function main$lambda(closure$json) {
    return function (it) {
      var missionsSection = document.getElementById('missions');
      return missionsSection != null ? append(missionsSection, main$lambda$lambda(closure$json)) : null;
    };
  }
  function main(args) {
    println('Hello JavaScript!');
    var json = new Json(void 0, PolyModules_getInstance().missionPart);
    window.onload = main$lambda(json);
  }
  function CheckBoxMissionPart(description, completionScore) {
    CheckBoxMissionPart$Companion_getInstance();
    this.description = description;
    this.completionScore = completionScore;
    this.completed = new State(false);
    this.score = new State(0);
    this.completed.observe_e2wk6p$(CheckBoxMissionPart_init$lambda(this));
  }
  CheckBoxMissionPart.prototype.getScore = function () {
    return this.score;
  };
  function CheckBoxMissionPart$Companion() {
    CheckBoxMissionPart$Companion_instance = this;
    this.helper_0 = new SerializationHelper(getKClass(CheckBoxMissionPart), hashMapOf([to(0, new HelperHolder('description', serializer(kotlin_js_internal_StringCompanionObject), CheckBoxMissionPart$Companion$helper$lambda)), to(1, new HelperHolder('completionScore', serializer_0(kotlin_js_internal_IntCompanionObject), CheckBoxMissionPart$Companion$helper$lambda_0)), to(2, new HelperHolder('completed', new StateSerializer(serializer_1(kotlin_js_internal_BooleanCompanionObject)), CheckBoxMissionPart$Companion$helper$lambda_1)), to(3, new HelperHolder('score', new StateSerializer(serializer_0(kotlin_js_internal_IntCompanionObject)), CheckBoxMissionPart$Companion$helper$lambda_2))]), CheckBoxMissionPart$Companion$helper$lambda_3);
    this.descriptor_9l9ql5$_0 = this.helper_0.descriptor;
  }
  Object.defineProperty(CheckBoxMissionPart$Companion.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_9l9ql5$_0;
    }
  });
  CheckBoxMissionPart$Companion.prototype.serialize_awe97i$ = function (encoder, obj) {
    this.helper_0.serialize_awe97i$(encoder, obj);
  };
  CheckBoxMissionPart$Companion.prototype.deserialize_nts5qn$ = function (decoder) {
    return this.helper_0.deserialize_nts5qn$(decoder);
  };
  CheckBoxMissionPart$Companion.prototype.serializer = function () {
    return CheckBoxMissionPart$Companion_getInstance();
  };
  function CheckBoxMissionPart$Companion$helper$lambda(it) {
    return it.description;
  }
  function CheckBoxMissionPart$Companion$helper$lambda_0(it) {
    return it.completionScore;
  }
  function CheckBoxMissionPart$Companion$helper$lambda_1(it) {
    return it.completed;
  }
  function CheckBoxMissionPart$Companion$helper$lambda_2(it) {
    return it.score;
  }
  function CheckBoxMissionPart$Companion$helper$lambda_3(it) {
    var tmp$, tmp$_0;
    var $receiver = new CheckBoxMissionPart(typeof (tmp$ = it.get_11rb$('description')) === 'string' ? tmp$ : throwCCE(), typeof (tmp$_0 = it.get_11rb$('completionScore')) === 'number' ? tmp$_0 : throwCCE());
    var tmp$_1, tmp$_2;
    var completed1 = (Kotlin.isType(tmp$_1 = it.get_11rb$('completed'), State) ? tmp$_1 : throwCCE()).getCurrentState();
    var score1 = (Kotlin.isType(tmp$_2 = it.get_11rb$('score'), State) ? tmp$_2 : throwCCE()).getCurrentState();
    $receiver.completed.update_trkh7z$(completed1);
    $receiver.score.update_trkh7z$(score1);
    return $receiver;
  }
  CheckBoxMissionPart$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [KSerializer]
  };
  var CheckBoxMissionPart$Companion_instance = null;
  function CheckBoxMissionPart$Companion_getInstance() {
    if (CheckBoxMissionPart$Companion_instance === null) {
      new CheckBoxMissionPart$Companion();
    }
    return CheckBoxMissionPart$Companion_instance;
  }
  function CheckBoxMissionPart_init$lambda(this$CheckBoxMissionPart) {
    return function (f, new_0) {
      if (new_0)
        this$CheckBoxMissionPart.score.update_trkh7z$(this$CheckBoxMissionPart.completionScore);
      else
        this$CheckBoxMissionPart.score.update_trkh7z$(0);
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
    this.completed.observe_e2wk6p$(ExtraPointsForAllCompletedMissionPart_init$lambda(this));
    var tmp$;
    tmp$ = this.missions.iterator();
    loop_label: while (tmp$.hasNext()) {
      var element = tmp$.next();
      action$break: do {
        if (equals(element, this.myMission))
          break action$break;
        element.totalScore.observe_e2wk6p$(ExtraPointsForAllCompletedMissionPart_init$lambda$lambda(this));
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
        this$ExtraPointsForAllCompletedMissionPart.score.update_trkh7z$(this$ExtraPointsForAllCompletedMissionPart.backingScore_0);
      }
       else {
        this$ExtraPointsForAllCompletedMissionPart.score.update_trkh7z$(0);
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
    this.value.observe_e2wk6p$(SliderMissionPart_init$lambda(this));
  }
  SliderMissionPart.prototype.getScore = function () {
    return this.score;
  };
  function SliderMissionPart$Companion() {
    SliderMissionPart$Companion_instance = this;
    this.helper_0 = new SerializationHelper(getKClass(SliderMissionPart), hashMapOf([to(0, new HelperHolder('description', serializer(kotlin_js_internal_StringCompanionObject), SliderMissionPart$Companion$helper$lambda)), to(1, new HelperHolder('min', serializer_0(kotlin_js_internal_IntCompanionObject), SliderMissionPart$Companion$helper$lambda_0)), to(2, new HelperHolder('max', serializer_0(kotlin_js_internal_IntCompanionObject), SliderMissionPart$Companion$helper$lambda_1)), to(3, new HelperHolder('scoreMap', MapIntIntSerializer_getInstance(), SliderMissionPart$Companion$helper$lambda_2)), to(4, new HelperHolder('value', new StateSerializer(serializer_0(kotlin_js_internal_IntCompanionObject)), SliderMissionPart$Companion$helper$lambda_3)), to(5, new HelperHolder('score', new StateSerializer(serializer_0(kotlin_js_internal_IntCompanionObject)), SliderMissionPart$Companion$helper$lambda_4))]), SliderMissionPart$Companion$helper$lambda_5);
    this.descriptor_7h2e6v$_0 = this.helper_0.descriptor;
  }
  Object.defineProperty(SliderMissionPart$Companion.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_7h2e6v$_0;
    }
  });
  SliderMissionPart$Companion.prototype.serialize_awe97i$ = function (encoder, obj) {
    this.helper_0.serialize_awe97i$(encoder, obj);
  };
  SliderMissionPart$Companion.prototype.deserialize_nts5qn$ = function (decoder) {
    return this.helper_0.deserialize_nts5qn$(decoder);
  };
  SliderMissionPart$Companion.prototype.serializer = function () {
    return SliderMissionPart$Companion_getInstance();
  };
  function SliderMissionPart$Companion$helper$lambda(it) {
    return it.description;
  }
  function SliderMissionPart$Companion$helper$lambda_0(it) {
    return it.min;
  }
  function SliderMissionPart$Companion$helper$lambda_1(it) {
    return it.max;
  }
  function SliderMissionPart$Companion$helper$lambda_2(it) {
    return it.scoreMap;
  }
  function SliderMissionPart$Companion$helper$lambda_3(it) {
    return it.value;
  }
  function SliderMissionPart$Companion$helper$lambda_4(it) {
    return it.score;
  }
  function SliderMissionPart$Companion$helper$lambda_5(it) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var $receiver = new SliderMissionPart(typeof (tmp$ = it.get_11rb$('description')) === 'string' ? tmp$ : throwCCE(), typeof (tmp$_0 = it.get_11rb$('min')) === 'number' ? tmp$_0 : throwCCE(), typeof (tmp$_1 = it.get_11rb$('max')) === 'number' ? tmp$_1 : throwCCE(), Kotlin.isType(tmp$_2 = it.get_11rb$('scoreMap'), Map) ? tmp$_2 : throwCCE());
    var tmp$_3, tmp$_4;
    var value1 = (Kotlin.isType(tmp$_3 = it.get_11rb$('value'), State) ? tmp$_3 : throwCCE()).getCurrentState();
    var score1 = (Kotlin.isType(tmp$_4 = it.get_11rb$('score'), State) ? tmp$_4 : throwCCE()).getCurrentState();
    $receiver.value.update_trkh7z$(value1);
    $receiver.score.update_trkh7z$(score1);
    return $receiver;
  }
  SliderMissionPart$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [KSerializer]
  };
  var SliderMissionPart$Companion_instance = null;
  function SliderMissionPart$Companion_getInstance() {
    if (SliderMissionPart$Companion_instance === null) {
      new SliderMissionPart$Companion();
    }
    return SliderMissionPart$Companion_instance;
  }
  function SliderMissionPart_init$lambda(this$SliderMissionPart) {
    return function (f, new_0) {
      var tmp$, tmp$_0;
      tmp$_0 = this$SliderMissionPart.score;
      var tmp$_1;
      if ((tmp$ = this$SliderMissionPart.scoreMap.get_11rb$(new_0)) != null)
        tmp$_1 = tmp$;
      else {
        throw IllegalStateException_init(('Invalid value given to get score: ' + new_0).toString());
      }
      tmp$_0.update_trkh7z$(tmp$_1);
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
  function MapIntIntSerializer() {
    MapIntIntSerializer_instance = this;
    this.serializer_0 = get_map(to(internal.StringSerializer, internal.IntSerializer));
    this.descriptor_la3l1p$_0 = withName(internal.StringDescriptor, 'Map');
  }
  Object.defineProperty(MapIntIntSerializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_la3l1p$_0;
    }
  });
  MapIntIntSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var destination = LinkedHashMap_init(mapCapacity(obj.size));
    var tmp$;
    tmp$ = obj.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      destination.put_xwzc9p$(element.key.toString(), element.value);
    }
    var convertedMap = destination;
    encoder.encodeSerializableValue_tf03ej$(this.serializer_0, convertedMap);
  };
  MapIntIntSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var $receiver = decoder.decodeSerializableValue_w63s0f$(this.serializer_0);
    var destination = LinkedHashMap_init(mapCapacity($receiver.size));
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      destination.put_xwzc9p$(toInt(element.key), element.value);
    }
    return destination;
  };
  MapIntIntSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MapIntIntSerializer',
    interfaces: [KSerializer]
  };
  var MapIntIntSerializer_instance = null;
  function MapIntIntSerializer_getInstance() {
    if (MapIntIntSerializer_instance === null) {
      new MapIntIntSerializer();
    }
    return MapIntIntSerializer_instance;
  }
  function PolyModules() {
    PolyModules_instance = this;
    this.missionPart = SerializersModule(PolyModules$missionPart$lambda);
  }
  function PolyModules$missionPart$lambda$lambda($receiver) {
    $receiver.with_kmpi2j$(getKClass(CheckBoxMissionPart), CheckBoxMissionPart$Companion_getInstance().serializer());
    $receiver.with_kmpi2j$(getKClass(SliderMissionPart), SliderMissionPart$Companion_getInstance().serializer());
    return Unit;
  }
  function PolyModules$missionPart$lambda($receiver) {
    $receiver.polymorphic_myr6su$(getKClass(MissionPart), [], PolyModules$missionPart$lambda$lambda);
    return Unit;
  }
  PolyModules.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PolyModules',
    interfaces: []
  };
  var PolyModules_instance = null;
  function PolyModules_getInstance() {
    if (PolyModules_instance === null) {
      new PolyModules();
    }
    return PolyModules_instance;
  }
  function SerializationHelper(clazz, map, creator) {
    this.map = map;
    this.creator = creator;
    this.descriptor_oap3tv$_0 = new SerializationHelper$descriptor$ObjectLiteral(this, '' + clazz.simpleName);
  }
  Object.defineProperty(SerializationHelper.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_oap3tv$_0;
    }
  });
  SerializationHelper.prototype.serialize_awe97i$ = function (encoder, obj) {
    var $receiver = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    var tmp$;
    tmp$ = this.map.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.encodeSerializableElement_blecud$(this.descriptor, element.key, element.value.serializer, element.value.getter(obj));
    }
    $receiver.endStructure_qatsm0$(this.descriptor);
  };
  SerializationHelper.prototype.deserialize_nts5qn$ = function (decoder) {
    var resultMap = LinkedHashMap_init_0();
    var $receiver = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    var tmp$;
    loop: while (true) {
      var i = $receiver.decodeElementIndex_qatsm0$(this.descriptor);
      if (i === -1)
        break loop;
      else {
        tmp$ = this.map.get_11rb$(i);
        if (tmp$ == null) {
          throw new SerializationException('Unknown index ' + i);
        }
        var x = tmp$;
        var key = x.name;
        var value = ensureNotNull($receiver.decodeSerializableElement_s44l7r$(this.descriptor, i, x.serializer));
        resultMap.put_xwzc9p$(key, value);
      }
    }
    $receiver.endStructure_qatsm0$(this.descriptor);
    return this.creator(resultMap);
  };
  function SerializationHelper$descriptor$ObjectLiteral(this$SerializationHelper, name, generatedSerializer) {
    SerialClassDescImpl.call(this, name, generatedSerializer);
    var tmp$;
    tmp$ = this$SerializationHelper.map.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.addElement_ivxn3r$(element.value.name);
    }
  }
  SerializationHelper$descriptor$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SerialClassDescImpl]
  };
  SerializationHelper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializationHelper',
    interfaces: [KSerializer]
  };
  function HelperHolder(name, serializer, getter) {
    this.name = name;
    this.getter = getter;
    this.serializer = new HelperHolder$serializer$ObjectLiteral(serializer);
  }
  function HelperHolder$serializer$ObjectLiteral(closure$serializer) {
    this.closure$serializer = closure$serializer;
    this.descriptor_gyc2cs$_0 = closure$serializer.descriptor;
  }
  HelperHolder$serializer$ObjectLiteral.prototype.deserialize_nts5qn$ = function (decoder) {
    return this.closure$serializer.deserialize_nts5qn$(decoder);
  };
  Object.defineProperty(HelperHolder$serializer$ObjectLiteral.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_gyc2cs$_0;
    }
  });
  HelperHolder$serializer$ObjectLiteral.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$, tmp$_0;
    (Kotlin.isType(tmp$ = this.closure$serializer, KSerializer) ? tmp$ : throwCCE()).serialize_awe97i$(encoder, Kotlin.isType(tmp$_0 = obj, Any) ? tmp$_0 : throwCCE());
  };
  HelperHolder$serializer$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [KSerializer]
  };
  HelperHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelperHolder',
    interfaces: []
  };
  function State(state) {
    State$Companion_getInstance();
    this.state_0 = state;
    this.observers_0 = ArrayList_init();
  }
  State.prototype.update_trkh7z$ = function (newState) {
    var tmp$;
    tmp$ = this.observers_0.iterator();
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      it(this.state_0, newState);
    }
    this.state_0 = newState;
  };
  State.prototype.getCurrentState = function () {
    return this.state_0;
  };
  State.prototype.observe_e2wk6p$ = function (observer) {
    observer(this.state_0, this.state_0);
    this.observers_0.add_11rb$(observer);
  };
  function State$Companion() {
    State$Companion_instance = this;
  }
  State$Companion.prototype.serializer_swdriu$ = function (typeSerial0) {
    return new StateSerializer(typeSerial0);
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
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function StateSerializer(serializer) {
    this.serializer_0 = serializer;
    this.descriptor_i79flv$_0 = withName(internal.StringDescriptor, 'State');
  }
  Object.defineProperty(StateSerializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_i79flv$_0;
    }
  });
  StateSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeSerializableValue_tf03ej$(this.serializer_0, obj.getCurrentState());
  };
  StateSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return new State(decoder.decodeSerializableValue_w63s0f$(this.serializer_0));
  };
  StateSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateSerializer',
    interfaces: [KSerializer]
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
  var bindTo = defineInlineFunction('fll-score-app.state.bindTo_5cpel0$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function bindTo$lambda(this$bindTo) {
      return function (f, new_0) {
        this$bindTo.innerText = new_0.toString();
        return Unit;
      };
    }
    return function (T_0, isT, $receiver, state) {
      state.observe_e2wk6p$(bindTo$lambda($receiver));
      return $receiver;
    };
  }));
  var bindTo_0 = defineInlineFunction('fll-score-app.state.bindTo_t1yois$', wrapFunction(function () {
    var InputType = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.InputType;
    var equals = Kotlin.equals;
    var getKClass = Kotlin.getKClass;
    var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
    var bindToInputCheckBox = _.state.bindToInputCheckBox_m14o6e$;
    var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
    var bindToInputRange = _.state.bindToInputRange_fcy6pt$;
    var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
    var throwCCE = Kotlin.throwCCE;
    var bindToInputTextField = _.state.bindToInputTextField_3kfxms$;
    var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
    function bindTo$lambda(typeClosure$T, isT) {
      return function (s) {
        var tmp$;
        return isT(tmp$ = toInt(s)) ? tmp$ : throwCCE();
      };
    }
    function bindTo$lambda_0(t) {
      return t.toString();
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
        closure$state.update_trkh7z$(toInt(this$bindToInputRange.value));
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
    state.observe_e2wk6p$(bindToInputRange$lambda_0($receiver));
    return $receiver;
  }
  function bindToInputCheckBox$lambda(closure$state, this$bindToInputCheckBox) {
    return function (event) {
      if (event.isTrusted) {
        closure$state.update_trkh7z$(this$bindToInputCheckBox.checked);
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
    state.observe_e2wk6p$(bindToInputCheckBox$lambda_0($receiver));
    return $receiver;
  }
  function bindToInputTextField$lambda(closure$state, closure$stringToT, this$bindToInputTextField) {
    return function (event) {
      if (event.isTrusted) {
        closure$state.update_trkh7z$(closure$stringToT(this$bindToInputTextField.value));
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
    state.observe_e2wk6p$(bindToInputTextField$lambda_0(stringFromT, $receiver));
    return $receiver;
  }
  function FileUtil() {
    FileUtil_instance = this;
  }
  function FileUtil$loadJSON$lambda(closure$xobj, closure$onResponse) {
    return function (it) {
      console.log('on ready');
      console.log(' ' + closure$xobj.readyState + '  ' + closure$xobj.status);
      if (closure$xobj.readyState === toShort(4) && closure$xobj.status === toShort(200)) {
        console.log('', closure$xobj.response);
        closure$onResponse(closure$xobj.response);
      }
      return Unit;
    };
  }
  FileUtil.prototype.loadJSON_a1vqyy$ = function (path, onResponse) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.responseType = 'json';
    xobj.open('GET', path, true);
    xobj.onreadystatechange = FileUtil$loadJSON$lambda(xobj, onResponse);
    xobj.send(null);
  };
  FileUtil.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FileUtil',
    interfaces: []
  };
  var FileUtil_instance = null;
  function FileUtil_getInstance() {
    if (FileUtil_instance === null) {
      new FileUtil();
    }
    return FileUtil_instance;
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
  Object.defineProperty(Mission, 'Companion', {
    get: Mission$Companion_getInstance
  });
  package$mission.Mission = Mission;
  package$mission.MissionPart = MissionPart;
  package$mission.main_kand9s$ = main;
  Object.defineProperty(CheckBoxMissionPart, 'Companion', {
    get: CheckBoxMissionPart$Companion_getInstance
  });
  var package$parts = package$mission.parts || (package$mission.parts = {});
  package$parts.CheckBoxMissionPart = CheckBoxMissionPart;
  package$parts.ExtraPointsForAllCompletedMissionPart = ExtraPointsForAllCompletedMissionPart;
  Object.defineProperty(SliderMissionPart, 'Companion', {
    get: SliderMissionPart$Companion_getInstance
  });
  package$parts.SliderMissionPart_init_archxs$ = SliderMissionPart_init;
  package$parts.SliderMissionPart = SliderMissionPart;
  var package$serialization = _.serialization || (_.serialization = {});
  Object.defineProperty(package$serialization, 'MapIntIntSerializer', {
    get: MapIntIntSerializer_getInstance
  });
  Object.defineProperty(package$serialization, 'PolyModules', {
    get: PolyModules_getInstance
  });
  package$serialization.SerializationHelper = SerializationHelper;
  package$serialization.HelperHolder = HelperHolder;
  Object.defineProperty(State, 'Companion', {
    get: State$Companion_getInstance
  });
  var package$state = _.state || (_.state = {});
  package$state.State = State;
  package$state.StateSerializer = StateSerializer;
  package$state.whenConditionIsMet_raybwq$ = whenConditionIsMet;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$state.bindToInputCheckBox_m14o6e$ = bindToInputCheckBox;
  package$state.bindToInputRange_fcy6pt$ = bindToInputRange;
  package$state.bindToInputTextField_3kfxms$ = bindToInputTextField;
  var package$util = _.util || (_.util = {});
  Object.defineProperty(package$util, 'FileUtil', {
    get: FileUtil_getInstance
  });
  Challenge$Companion.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  Mission$Companion.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  CheckBoxMissionPart$Companion.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  SliderMissionPart$Companion.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  MapIntIntSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  SerializationHelper.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  HelperHolder$serializer$ObjectLiteral.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  StateSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  main([]);
  Kotlin.defineModule('fll-score-app', _);
  return _;
}));

//# sourceMappingURL=fll-score-app.js.map
