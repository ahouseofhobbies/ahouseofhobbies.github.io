import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_ANY_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_HERO_PHASE,
  END_OF_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_MOVEMENT_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import CommandAbilities from './command_abilities'
import Spells from './spells'
import rule_sources from './rule_sources'
import meta_rule_sources from 'meta/rule_sources'
import monstrous_rampages from './monstrous_rampages'
import { TItemDescriptions } from 'factions/factionTypes'

const PropagatorOfDevolutionEffect = {
  name: `Propagator of Devolution`,
  desc: `This unit can run and still charge later in the turn.`,
  when: [MOVEMENT_PHASE, CHARGE_PHASE],
  shared: true,
}
const InfuseWithBestialVigorEffect = {
  name: `Infuse with Bestial Vigour`,
  desc: `Add 6" to the range of heroic actions from the Rituals of Ruin battle trait that you carry out with this unit. This ability can be used while this unit is set up in ambush as a reserve unit.`,
  when: [START_OF_HERO_PHASE],
  shared: true,
}
const BrayhornEffect = {
  name: `Brayhorn`,
  desc: `A unit that includes any Brayhorns can add 1 to run and charge rolls.`,
  when: [MOVEMENT_PHASE, CHARGE_PHASE],
  shared: true,
}
const BrayStandardBearerEffect = {
  name: `Standard Bearer`,
  desc: `1 in every 10 models in this unit can be a Banner Bearer. If this unit receives the Rally command while it includes any Banner Bearers, when you roll a dice for a slain model from this unit, you can return 1 slain model to this unit on a 5+ instead of only a 6.`,
  when: [START_OF_HERO_PHASE],
  shared: true,
}
const ChampionEffect = {
  name: `Champion`,
  desc: `1 model in this unit can be a Champion. Add 1 to the attacks characteristic of melee weapons for the champion.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const DespoilersEffect = {
  name: `Despoilers`,
  desc: `Add 1 to wound rolls for attacks made with melee weapons by this unit while it is within 3" of any enemy units that received the All-out Defence command in the same phase.`,
  when: [COMBAT_PHASE],
  rule_sources: [
    rule_sources.BATTLETOME_BEASTS_OF_CHAOS,
    meta_rule_sources.BATTLESCROLL_DEPLETED_RESERVES_APRIL_2023,
  ],
  shared: true,
}
const BloodgreedEffect = {
  name: `Bloodgreed`,
  desc: `Each unmodified hit roll for an attack made with a melee weapon by this unit is 6, that attack causes a number of mortal wounds to the target equal to the weapon's Damage characteristic and the attack sequence ends (do not make a wound roll or save roll).`,
  when: [COMBAT_PHASE],
  shared: true,
}
const BeneathTheTempestEffect = {
  name: `Beneath the Tempest`,
  desc: `At the end of the combat phase, roll a dice for this unit. On a 2+, you can heal up to D3 wounds allocated to this unit. In addition, at the end of the combat phase, roll a dice for each enemy unit within 3" of any friendly units with this ability. On a 2+, that unit suffers D3 mortal wounds.`,
  when: [END_OF_COMBAT_PHASE],
  shared: true,
}
const TzaangorChampionEffect = {
  name: `Champion`,
  desc: `1 model in this unit can be an Aviarch. Add 1 to the Attacks characteristic of that model's Tzeentchian Spear.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const BabblingStreamOfSecretsEffect = {
  name: `Babbling Stream of Secrets`,
  desc: `In the combat phase, enemy units within 3" of any friendly units with this ability cannot receive commands.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const GuidedByThePastEffect = {
  name: `Guided by the Past`,
  desc: `You can add 1 to wound rolls for attacks made with melee weapons by friendly units with this ability if you are taking the second turn in the current battleround. This ability does not affect attacks made by a mount.`,
  when: [COMBAT_PHASE],
  shared: true,
}

const Units = {
  Beastlord: {
    effects: [
      {
        name: `Dual Axes`,
        desc: `If the unmodified hit roll for an attack made with a melee weapon by this unit is 6, that attack causes a number of mortal wounds to the target equal to the weapon's Damage characteristic and the attack sequence ends (do not make a wound roll or save roll).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Call of Battle`,
        desc: `In the combat phase, when you pick this unit to fight for the first time in that phase, you can pick 1 other friendly BRAYHERD unit that is not a HERO, that is wholly within 12" of this unit and that has not yet fought in that phase. This unit and that other BRAYHERD unit can fight one after the other in the order of your choice.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Hatred of Heroes`,
        desc: `If this unit is within 3" of any enemy HEROES, add 1 to hit rolls and wound rolls for attacks made with melee weapons by friendly BEASTS OF CHAOS units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Great Bray-Shaman': {
    mandatory: {
      spells: [keyPicker(Spells, ['Devolve'])],
    },
    effects: [GenericEffects.WizardOneSpellEffect, InfuseWithBestialVigorEffect],
  },
  Gors: {
    effects: [
      BrayhornEffect,
      BrayStandardBearerEffect,
      ChampionEffect,
      {
        name: `Gor Stampede`,
        desc: `At the end of your charge phase, if this unit made a charge move in the same turn, you can pick 1 enemy unit within 1" of this unit that has fewer models than this unit and roll a dice. On a 3+, the strike-last effect applies to that enemy unit in the following combat phase.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Shield`,
        desc: `If this unit is armed with Hacking Blades and Beastshields, it has a Save characteristic of 4+ instead of 5+.`,
        when: [SAVES_PHASE],
      },
    ],
  },
  Ungors: {
    effects: [
      BrayhornEffect,
      BrayStandardBearerEffect,
      ChampionEffect,
      {
        name: `Fleet of Hoof`,
        desc: `In the combat phase, when you pick this unit to fight, you can say that it will evade the enemy. If you do so, this unit retreats instead of fighting.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Bestigors: {
    effects: [
      BrayhornEffect,
      BrayStandardBearerEffect,
      ChampionEffect,
      DespoilersEffect,
      {
        name: `Bestial Charge`,
        desc: `Subtract 1 from wound rolls for attacks that target this unit if the attack was made with a missile weapon by an enemy unit that received the Unleash Hell command in the same phase.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Ungor Raiders': {
    effects: [
      BrayStandardBearerEffect,
      {
        name: `Vile Invaders`,
        desc: `After armies are set up, but before the first battle round begins, this unit can move up to 6".`,
        when: [END_OF_SETUP],
      },
      {
        name: `Musician`,
        desc: `1 in every 10 models in this unit can be a Brayhorn Blower. This unit can run and still shoot later in the turn if it includes any Brayhorn Blowers.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `Hidden Volley`,
        desc: `Once per battle, at the start of your movement phase, if this unit is in reserve, you can pick a point on the battlefield edge and say that this unit will unleash a hidden volley. If you do so, this unit can shoot in that phase, but it must target the closest enemy unit to that point. If more than 1 enemy unit is tied to be the closest, you can pick which unit is the target.`,
        when: [START_OF_MOVEMENT_PHASE],
      },
    ],
  },
  'Tuskgor Chariots': {
    effects: [
      {
        name: `Tuskgor Charge`,
        desc: `After this unit makes a charge move, you can pick 1 enemy unit within 1" of this unit and roll a number of dice equal to the unmodified charge roll for that charge move. Add 1 to each roll if that enemy unit has a Wounds characteristic of 1 or 2. For each 5+, that unit suffers 1 mortal wound.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `CHAMPION`,
        desc: `If this unit has 2 or more models, 1 model in this unit can be a Charioteer Alpha. Add 1 to the Attacks characteristic of that model's melee weapons.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Centigors: {
    effects: [
      BrayhornEffect,
      ChampionEffect,
      {
        name: `Standard Bearer`,
        desc: `1 in every 5 models in this unit can be a Banner Bearer. This unit can retreat and still charge later in the turn if it includes any Banner Bearers.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
      {
        name: `Unruly Hooligans`,
        desc: `Add 1 to the Attacks characteristic of this unit's melee weapons while it is wholly within 9" of any objectives that you do not control.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Drunken Revelry`,
        desc: `The first 2 wounds or mortal wounds caused to this unit in the combat phase are negated. In addition, if a model in this unit would flee as a result of a failed battleshock test, you can roll a dice. On a 2+, that model does not flee.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Drunken Revelry`,
        desc: `If a model in this unit would flee as a result of a failed battleshock test, you can roll a dice. On a 2+, that model does not flee.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },
  Razorgors: {
    effects: [
      {
        name: `Baited Charge`,
        desc: `If this unit is within 3" of any friendly UNGORS units at the end of your charge phase, and this unit made a charge move in the same turn, double the Attacks characteristic of this unit's melee weapons until the end of that turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Feed on Mangled Remains`,
        desc: `At the end of each phase, you can heal 1 wound allocated to this unit if it is within 6" of any enemy units that have had any models slain in that phase.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Slaangor Fiendbloods': {
    effects: [
      ChampionEffect,
      {
        name: `Slaughter at Any Cost`,
        desc: `At the end of any phase, if any wounds or mortal wounds were allocated to this unit in that phase, and this unit is more than 9" from all enemy units, this unit can move up to D6".`,
        when: [END_OF_ANY_PHASE],
      },
      {
        name: `Obsessive Violence`,
        desc: `Once per battle, in the combat phase, after this unit has fought for the first time in that phase, you can say that it will continue its obsessive onslaught. If you do so, this unit can fight for a second time in that phase. The strike-last effect applies to this unit when it fights for that second time.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Doombull: {
 /*   mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ["Slaughterer's Call"])],
    }, */
    effects: [
      BloodgreedEffect,
      {
        name: `Alpha Charge`,
        desc: `After this unit makes a charge move, you can pick 1 enemy unit within 1" of this unit and roll a dice. On a 2+, that unit suffers D3 mortal wounds at the end of that phase.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  Bullgors: {
    effects: [
      ChampionEffect,
      BloodgreedEffect,
      {
        name: `Warherd Charge`,
        desc: `After this unit makes a charge move, you can pick 1 enemy unit within 1" of this unit and roll a dice. On a 2+, that unit suffers 1 mortal wound at the end of that phase.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Warherd Drummer`,
        desc: `Add 1 to charge rolls for a unit that includes any Warherd Drummers.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Warherd Banner Bearer`,
        desc: `1 in every 3 models in this unit can be a Warherd Banner Bearer. if it includes any Warherd Banner Bearers, you can reroll the dice that determines whether an enemy unit suffers 1 mortal wound from the Warherd Charge.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Dual Axes`,
        desc: `You can reroll hit rolls of 1 for attacks made with a pair of Bullgor Axes.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Bullshields`,
        desc: `If this unit is armed with Cleaving Axes and Bullshields, it has a Save characteristic of 4+ instead of 5+.`,
        when: [SAVES_PHASE],
      },
    ],
  },
  Ghorgon: {
   /* mandatory: {
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Feast on Flesh'])],
    }, */
    effects: [
      {
        name: `Swallow Whole`,
        desc: `After this unit makes a pile-in move, you can pick a number of enemy models within 3" of this unit equal to or less than the Swallow Whole value shown on this unit's damage table, and roll a dice for each. If the roll is greater than that model's Wounds characteristic, it is slain. If an enemy model is slain by this ability, you can heal a number of wounds allocated to this unit equal to the Wounds characteristic of that slain model.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Cygor: {
   /* mandatory: {
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Consume Endless Spell'])],
    }, */
    effects: [
      {
        name: `Soul-eater`,
        desc: `This unit can attempt to unbind 2 spells in the enemy hero phase in the same manner as a WIZARD. In addition, each time an enemy WIZARD within 30" of any friendly units with this ability successfully casts a spell and that spell is not unbound, the caster suffers 1 mortal wound after the effect of that spell has been resolved.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Dragon Ogor Shaggoth': {
    mandatory: {
      spells: [keyPicker(Spells, ['Summon Lightning'])],
    },
    effects: [
      GenericEffects.WizardOneSpellEffect,
      BeneathTheTempestEffect,
      {
        name: `Scion of the Primordial Storm`,
        desc: `Each time this unit is affected by a spell or the abilities of an endless spell, you can roll a dice. On a 4+, ignore the effect of that spell or the effects of that endless spell's abilities on this unit.`,
        when: [HERO_PHASE, END_OF_HERO_PHASE],
      },
    ],
  },
  'Dragon Ogors': {
    effects: [
      GenericEffects.Elite,
      BeneathTheTempestEffect,
      {
        name: `Storm Rage`,
        desc: `If this unit made a charge move in the same turn, if the unmodified hit roll for an attack made by this unit is 6, that attack wounds the target automatically (do not make a wound roll).`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Chaos Warhounds': {
    effects: [
      {
        name: `Outrunners of Chaos`,
        desc: `When you make a charge roll for this unit, you can change 1 of the dice in that roll to a 4.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Chaos Spawn': {
    effects: [
      {
        name: `Writhing Tentacles`,
        desc: `If you roll a double when determining the number of attacks, add 1 to hit rolls and wound rolls for attacks made by this unit until the end of that phase.`,
        when: [COMBAT_PHASE],
      },
      PropagatorOfDevolutionEffect,
    ],
  },
  Jabberslythe: {
   /* mandatory: {
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Aura of Madness'])],
    }, */
    effects: [
      {
        name: `Spurting Bile Blood`,
        desc: `Roll a dice each time a melee wound is allocated to this unit. On a 4+ the attacker suffers 1 mortal wound.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  Cockatrice: {
    effects: [
      {
        name: `Petrifying Gaze`,
        desc: `At the start of the combat phase, you can pick 1 enemy unit within 6" of this unit and roll a dice. On a 4+, that unit suffers D3 mortal wounds.
        In addition, if any mortal wounds caused by this ability are allocated to a unit, until the end of that phase, only unmodified hit rolls of 6 for attacks made with melee weapons by that unit score a hit. The same unit cannot be affected by this ability more than once per phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
      {
        name: `Petrifying Gaze`,
        desc: `If active, only unmodified hit rolls of 6 for attacks made with melee weapons by that unit score a hit for the enemy unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Maddened Ferocity`,
        desc: `Double the Attacks characteristic of this unit's melee weapons if it made a charge move in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Chimera: {
   /* mandatory: {
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Thricefold Savagery'])],
    }, */
    effects: [
      {
        name: `Fiery Breath`,
        desc: `Do not use the attack sequence for an attack made with Fiery Breath. Instead the target suffers D3 mortal wounds.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Tzaangor Shaman': {
    mandatory: {
      spells: [keyPicker(Spells, ['Boon of Mutation'])],
    },
    effects: [
      GenericEffects.WizardOneSpellEffect,
      {
        name: `Sorcerous Elixir`,
        desc: `Once per battle, in your hero phase, this unit can attempt to cast 1 extra spell. If it does so, you can add 3 to the casting roll for that spell.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Tzaangor Skyfires': {
    effects: [
      ChampionEffect,
      {
        name: `Guided by the Future`,
        desc: `Ignore negative modifiers to hit or wound rolls for attacks made with missile weapons by this unit, and ignore positive modifiers to save rolls for attacks made with missile weapons by this unit.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Judgement from Afar`,
        desc: `If the unmodified hit roll for an attack made with an Arrow of Fate is 6, the target suffers D3 mortal wounds and the attack sequence ends (do not make a wound roll or save roll).`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Tzaangor Enlightened': {
    effects: [TzaangorChampionEffect, BabblingStreamOfSecretsEffect, GuidedByThePastEffect],
  },
  'Tzaangor Enlightened on Discs of Tzeentch': {
    effects: [TzaangorChampionEffect, BabblingStreamOfSecretsEffect, GuidedByThePastEffect],
  },
  Tzaangors: {
    effects: [
      {
        name: `Champion`,
        desc: `1 model in this unit can be an Twistbray. Add 1 to the Attacks characteristic of that model's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Standard Bearer`,
        desc: `1 in every 10 models in this unit can be an Icon Bearer. While this unit includes any Icon Bearers, it can use the Ornate Totems ability.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Musician`,
        desc: `1 in every 10 models in this unit can be a Brayhorn Blower. While this unit includes any Brayhorn Blowers, it can run and still charge later in the turn.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
      {
        name: `Tzaangor Mutant`,
        desc: `1 in every 5 models in this unit can be a Tzaangor Mutant armed with a pair of Savage Blades and Vicious Beak. Add 1 to the Attacks characteristic of that model's pair of Savage Blades.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Savagery Unleashed`,
        desc: `Add 1 to the Attacks characteristic of this unit's Vicious Beaks if it made a charge move in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ornate Totem`,
        desc: `While this unit includes any Icon Bearers, at the start of your hero phase, you can pick 1 enemy unit within 18" of this unit and roll a dice for each Wizard that is within 9" of this unit. For each 4+, the unit you picked suffers 1 mortal wound.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Morghurite Chaos Spawn': {
    effects: [
      {
        name: `Aura of Insanity`,
        desc: `Subtract 1 from the Attacks characteristic of weapons used by enemy units while they are within 1" of this unit (to a minimum of 1).`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      PropagatorOfDevolutionEffect,
    ],
  },
  'Chaos Gargant': {
    effects: [
      ...GenericEffects.Gargant,
      {
        name: `Stuff 'Em In Me Bag`,
        desc: `After this unit makes a pile-in move, pick 1 enemy model within 3" of it and roll a dice. If the roll is at least double that model's Wounds characteristic, it is slain.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Aura of Foulness`,
        desc: `Subtract 1 from save rolls for enemy units within 3" of any friendly units with this ability.`,
        when: [SAVES_PHASE],
      },
      {
        name: `Whipped into a Frenzy`,
        desc: `If this unit is within 6" of any friendly BEASTS OF CHAOS HEROES, add 1 to the Attacks characteristic of this unit's melee weapons until the end of that phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
  'Grashrak Fellhoof': {
    mandatory: {
      spells: [keyPicker(Spells, ['Savage Bolt'])],
    },
    effects: [InfuseWithBestialVigorEffect, GenericEffects.WizardOneSpellEffect],
  },
  "Grashrak's Despoilers": {
    effects: [
      {
        name: `Violent Despoilers`,
        desc: `Add 1 to hit rolls for attacks made by the Despoilers' unit while it is wholly outside your territory.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `Grashrak's Savage Herd`,
        desc: `Before you allocate a wound or mortal wound to a friendly GRASHRAK FELLHOOF within 3" of this unit, or instead of making a ward roll for a wound or mortal wound that would be allocated to a friendly GRASHRAK FELLHOOF within 3" of this unit, roll a dice. On a 4+, that wound or mortal wound must be allocated to this unit instead of GRASHRAK FELLHOOF.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  'ROR: Hargax`s Pit-Beasts': {
    effects: [
      {
        name: `Ogroid Myrmidon: Myrmidon Rage - Passive`,
        desc: `Effect: While this unit is damaged, add 2 to the Attacks characteristic of its melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Fomoroid Crusher: Cursed Destroyers - Once Per Turn`,
        desc: `Declare: Pick a terrain feature within 1" of this unit, then pick each other unit (friendly and enemy) within 3" of that terrain feature to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mindstealer Sphiranx: Dominate Mind - Once Per Turn`,
        desc: `Declare: Pick an enemy unit within 6" of this unit to be the target. 
        Effect: Roll a dice. If the roll exceeds the targets Control characteristic, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Bestial Domination - Reaction: You declared a Fight ability for a unit in this Regiment of Renown`,
        desc: `Used By: The unit using that Fight ability. 
        Effect: Pick a unit in this Regiment of Renown that has not used a Fight ability this turn to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },  
    ],
  },
  'ROR: The Coven of Thryx': {
    effects: [
      {
        name: `Magister: Magic-Touched`,
        desc: `Effect: If this unit successfully cast a spell this phase, for the rest of the turn:  
        Add 1 to this units power level.  
        If 2 or more dice in a casting roll for this unit have the same value, the spell fails, its effect is not resolved and D6 mortal damage is inflicted on this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Pink Horrors: Lunatic Demise - Passive`,
        desc: `Effect: Each time a model in this unit is slain, before removing the model from play, pick 1 of the following effects: 
        Split: Pick a friendly Blue Horrors and Brimstone Horrors unit within 12" of this unit. Return up to 2 slain Blue Horror models to that unit. 
        Petty Vengeance: Pick an enemy unit in combat with this unit to be the target and roll a dice. On a 4+, inflict 1 mortal damage on the target.`,
        when: [DURING_GAME],
      },
      {
        name: `Tome of Eyes: Transfixed by Countless Eyes - Reaction: You declared a Spell ability for a Wizard within this Manifestations combat range`,
        desc: `Effect: You can add 1 or 2 to the casting roll for that spell. Roll a number of dice equal to the amount added. For each 1-2, allocate 1 damage point to the caster. If the caster is destroyed by this ability, the spell has no effect.`,
        when: [HERO_PHASE],
      }, 
      {
        name: `Burning SIgil of Tzeentch: Radiant Transmogrification`,
        desc: `Declare: This Manifestation must use this ability in each movement phase. Pick each unit (friendly and enemy) within 9" of this Manifestation to be the targets. 
        Effect: Roll 2 dice, pick either result, then apply the corresponding eect to all targets for the rest of the turn. 
        1-2 No effect. 
        3 Subtract 2" from the targets Move characteristic. 
        4 Subtract 1 from hit rolls for the targets attacks. 
        5 Subtract 1 from wound rolls for the targets attacks. 
        6 Inflict D3 mortal damage on the target, then add 1 to the Attacks characteristic of the targets melee weapons.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Sparks of Profane Potential - Once Per Battle`,
        desc: `Effect: If the Magister in the Regiment of Renown has been deployed, set up one of the following Manifestations within 1" of them:  
        1 Burning Sigil of Tzeentch  
        1 Tome of Eyes  
        1 Daemonic Simulacrum.`,
        when: [DURING_SETUP],
      },
      {
        name: `Skilled Summoner: Casting value of 6`,
        desc: `Declare: Pick the Magister in this Regiment of Renown to cast this spell, pick 1 of the Manifestations from the list below that is not on the battlefield, then make a casting roll of 2D6:  
        1 Burning Sigil of Tzeentch  
        1 Tome of Eyes  
        1 Daemonic Simulacrum 
        Effect: If there is already a friendly Manifestation from the list above on the battlefield, it is immediately banished. Then, set up the Manifestation you picked within 1" of the caster and visible to them. If that Manifestation is a Daemonic Simulacrum, it must also be set up more than 9" away from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Flickering Wyrdflame - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that had any damage points inflicted on it this turn by Wyrdflame Spell abilities or attacks made with weapons that have the Wyrdflame weapon ability to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
      {
        name: `Bolt of Tzeentch: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick the Magister in this Regiment of Renown to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Inflict D3 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Phulgoth`s Shudderhood': {
    effects: [
      {
        name: `Harbinger of Decay: Knell of Doom - Once Per Battle - Enemy Hero Phase`,
        desc: `Declare: Pick up to 3 enemy units within 24" of this unit to be the targets. 
        Effect: Until the start of your next turn, subtract 1" from the Move characteristic of each target and subtract 1 from run rolls and charge rolls for each target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Harbinger of Decay: Omens of Decay: Chant value of 4`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target, then make a chanting roll of D6. 
        Effect: Subtract twice the current battle round number from the targets control score for the rest of the turn. If the chanting roll was 10+, this ability aects all enemy units within 12" of this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Putrid Blightkinds: Bloated Bulk - Passive`,
        desc: `Effect: Add 3 to this units control score while each model in this unit is contesting an objective you control.`,
        when: [END_OF_TURN],
      },
      {
        name: `Pusgoyle Blightlords: Relentless Attackers - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units Flyriders Arsenal for attacks that target units contesting an objective you do not control.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Fog of Despair - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target units in this Regiment of Renown while they are wholly within 9" of the Harbinger of Decay in this Regiment of Renown.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Nauseating Convalescence - Once Per Turn`,
        desc: `Effect: Heal (1) each unit in this Regiment of Renown.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Krittok`s Clawpack': {
    effects: [
      {
        name: `Krittok Foulblade: Doomfang`,
        desc: `Effect: This unit has Strike-first for the rest of the turn but it cannot use commands this phase.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Krittok Foulblade:: Command Ability - A Reputation for Cunning - Enemy Hero Phase`,
        desc: `Effect: You can pick 2 different eligible units to use the Always Three Clawsteps Ahead ability this phase instead of 1, but at least 1 of those units must have the Verminus Keyword.`,
        when: [HERO_PHASE],
      },
      {
        name: `Krittok Foulblade: Foster Competition - Passive`,
        desc: `Effect: Add 1 to wound rolls for friendly Stormvermin units while they are wholly within 13" of this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Stormvermin: Elite Bodyguard - Passive`,
        desc: `Effect: Friendly Skaven Infantry Heroes have Ward (5+) while they are within this units combat range.`,
        when: [DURING_GAME],
      },
      {
        name: `Doom-Flayer: Whirling Doom`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Fickle Motives - Passive`,
        desc: `Effect: Add 1 to the Attack characteristic of melee weapons used by friendly Krittok's Clawpack units while you have more victory points than your opponent.
        Subtract 3 from the control scores of friendly Krittok's Clawpack units while you have fewer victory points than your opponent.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Always Three Clawsteps Ahead - Once Per Turn - Enemy Hero Phase`,
        desc: `Declare: Picke a friendly Krittok's Clawpack unit that is not in combat to use this ability.
        Effect: That unit can use the 'Normal Move' ability as if it were your Movement phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Skryre Payloads - Passive`,
        desc: `Effect: Friendly Krittok's Clawpack Doom-Flayers units have Ward (5+) while they are in combat range of a friendly Krittok's Clawpack Stormvermin unit.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'ROR: Vlot-Klaw`s Enginecoven': {
    effects: [
      {
        name: `Warlock Galvaneer: Lightning Master - Once Per Battle`,
        desc: `Declare: Pick a friendly Warpvolt Scourgers unit within this unit's combat range to be the target.
        Effect: Roll a dice. On a 2+, set the Attacks characteristic of the target's Warpvolt Scourgers to 10 for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Warlock Galvaneer: More-More Warpvolt Doom!`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by attacks made with this unit's Warpvolt Obliterator to be the target.
        Effect: Roll a D3 for each other enemy unit within the target's combat range. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Ratling Warpblaster: Overwhelming Fire - Passive`,
        desc: `Effect: Add 1 to hit rolls for this units shooting attacks that target an enemy unit that has 10 or more models.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Behold my Genius! - Once Per Battle`,
        desc: `Declare: Pick all friendly Volt-Klaw's Enginecoven units to be the targets.
        Effect: Until the start of your next turn:
        Add 1 to hit rolls for the targets' shooting attacks.
        Add 3" to the Range characteristic of the targets' ranged weapons.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Hide-Shelter! - Passive`,
        desc: `Effect: While a friendly Volt-Klaw's Enginecoven Infantry unit is witin the combat range of a friendly Volt-Klaw's Enginecoven Ratling Warpblaster, it is not visible to enemy units more than 13" away.`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
