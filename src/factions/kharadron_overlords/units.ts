import { keyPicker, tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_ANY_PHASE,
  END_OF_CHARGE_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_GAME,
  START_OF_HERO_PHASE,
  START_OF_MOVEMENT_PHASE,
  START_OF_SETUP,
  START_OF_SHOOTING_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import command_abilities from './command_abilities'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const EmbarkingDeployEffect = {
  /* name: `Embarking (Deployment)`,
  desc: `During deployment, instead of setting up a SKYFARER unit on the battlefield, you can say that it is embarked in a friendly TRANSPORT VESSEL that is already on the battlefield.`,
  when: [DURING_SETUP],
  shared: true, */
}
const EmbarkingEffect = {
  /*  name: `Embarking`,
  desc: `In the movement phase, if a friendly SKYFARER unit finishes a move wholly within 3" of a friendly TRANSPORT VESSEL and both of those units are more than 3" from all enemy units, you can say that the TRANSPORT VESSEL will embark that SKYFARER unit.`,
  when: [MOVEMENT_PHASE],
  shared: true, */
}
const EmbarkedEffect = {
  /*name: `Embarked`,
  desc: `Embarked units are still treated as being on the battlefield. Range and visiblity is measured to and from the TRANSPORT VESSEL in which the unit is embarked.

  For the purposes of visibilty, models in an embarked unit are treated as models that can fly.

  Embarked units are in cover. In addition, subtract 1 from hit rolls for attackes that target embarked units.

  Models in an embarked unit cannot contest objectives.

  Embarked units cannot move. However when a TRASNPORT VESSEL finished any type of move, all units embarked in it are considered to have made the same type of move.`,
  when: [DURING_GAME],
  shared: true, */
}
const DisembarkEffect = {
  /* name: `Disembarking`,
  desc: `In your movement phase, if a friendly SKYFARER unit is embarked in a TRANSPORT VESSEL that has not yet moved in that phase, you can say that the SKYFARER unit will disembark. If you do so, set up that SKYFARER unit wholly within 3" of that TRANSPORT VESSEL and more than 3" from all enemy units. A unit disembarks in this way can still move in the same turn.`,
  when: [MOVEMENT_PHASE],
  shared: true,*/
}
const DisembarkFromDestroyedVessel = {
  /* name: `Disembarking from a Destroyed Vessel`,
  desc: `If a friendly TRANSPORT VESSEL is destroyed, before removing it from play, roll a number of dice equal to the number of models embarked in it. For each roll of 1, 1 embarked model is slain (you choose which models are slain). Then, all units embarked in that TRANSPORT VESSEL must immediately disembark before it is removed from play.

  When a unit disembarks, if a model cannot be set up wholly within 3" of the TRANSPORT VESSEL in which it is embared and more than 3" from all enemy units, it is slain.`,
  when: [WOUND_ALLOCATION_PHASE],
  shared: true, */
}
const FlyingTransportEffect = {
  /* name: `Flying Transport`,
  desc: `This model can fly. In addition, up to 12 (22 for Ironclad) SKYFARER models can be embarked in it. If this unit is part of an army that is not a Kharadron Overlords army, it can still use the Sky-fleets battle trait (Embark/Disembark rules).`,
  when: [DURING_GAME],
  shared: true, */
}
const SkyCannonEffect = {
  /* name: `Sky Cannon`,
  desc: `Before attacking with a Sky Cannon, choose either the Shrapnel or Shell missile weapon characteristics for that shooting attack.`,
  when: [SHOOTING_PHASE],
  shared: true, */
}
const AetherKhemistEffects = [
  /* {
    name: `Aetheric Augmentation`,
    desc: `At the start of your shooting phase, if this unit is not embarked, you can pick 1 friendly SKYFARERS unit that is not embarked and is wholly within 12" of this unit. Improve the Rend characteristic of that unit's missile weapons by 1 until the end of that phase. That same unit cannot be affects by this ability more than once per phase.`,
    when: [SHOOTING_PHASE],
    rule_sources: [rule_sources.BATTLETOME_KHARADRON_OVERLORDS, rule_sources.ERRATA_MARCH_2023],
  },
  {
    name: `Atmospheric Isolation`,
    desc: `Subtract 1 from hit rolls for attacks made by enemy models while they are within 3" of any friendly units with this ability that are not embarked.`,
    when: [SHOOTING_PHASE, COMBAT_PHASE],
  }, */
]
const SkyhookEffect = {
  /*  name: `Skyhook`,
  desc: `The Damage characteristic of this unit's Skyhook or Light Skyhook is 3 if the target of the attack is a MONSTER.`,
  when: [SHOOTING_PHASE],
  shared: true,*/
}
const ShipSkyhookEffect = {
  /*  name: `Skyvessel Skyhook`,
  desc: `The Damage characters of this unit's Great Skyhook or Heavy Skyhook is 6 if that target is a MONSTER. In addition, if an attack is made with this unit's Great/Heavy Skyhook scores a hit on a MONSTER, if that MONSTER is not slain, after that attack has been resovled, roll a dice. On a 4+, that MONSTER is snagged until the end of the turn. While a MONSTER is snagged, it cannot carry out monstrous rampages. A MONSTER cannot be snagged more than once in the same turn.`,
  when: [SHOOTING_PHASE],
  shared: true,*/
}
const GrapnelLauncherEffect = {
  /* name: `Grapnel Launcher`,
  desc: `While this unit includes any models armed with a grapnel launcher, once per battle, at the end of your movement phase, you can say this unit will reel itself twoards an object. If you do so, pick a point on the battlefield within 15" of this unit and on a terrain feature. Then, remove this unit from the battlefield and set it up again wholly within 3" of that point and more than 9" from all enemy units.`,
  when: [END_OF_MOVEMENT_PHASE],
  shared: true,*/
}
const BulwarksOfIron = {
  /*  name: `Bulwarks of Iron`,
  desc: `This unit counts as 5 models for the purposes of contesting objectives.`,
  when: [DURING_GAME],
  shared: true,*/
}
const BombRacksEffect = {
  /* name: `Bomb Racks`,
  desc: `After this unit finishes a normal move or a run, you can pick 1 enemy unit that this unit passed across and roll a number of dice equal to the Bomb Racks value shown on this unit's damage table. For each 4+, that enemy unit suffers 1 mortal wound. This ability has no effect on units that can fly.`,
  when: [MOVEMENT_PHASE],
  shared: true,*/
}
const EndrinmasterHealEffect = (val: '3' | 'D3') => ({
  /* name: `Endrinmaster`,
  desc: `At the start of your hero phase, you can pick 1 friendly SKYVESSEL within 1" of this model. Heal up to ${val} wounds allocated to that SKYVESSEL.`,
  when: [START_OF_HERO_PHASE],
  shared: true,*/
})
const DrillEffect = (nVal: 'Cannon' | 'Launcher', rVal: '5+' | '6') => ({
  /* name: `Drill ${nVal}`,
  desc: `If the unmodified hit roll for an attack made with a Drill ${nVal} is ${rVal}, that attack causes 3 mortal wounds to the target and the attack sequence ends.`,
  when: [SHOOTING_PHASE],
  shared: true, */
})

const Units = {
  Codewright: {
    effects: [
      {
        name: `Advisory Role - Once Per Turn`,
        desc: `Declare: Pick up to 3 visible friendly Skyfarers units to be the targets. 
        Effect: Roll a dice for each target. On a 3+, pick 1 of the following effects to apply to that target for the rest of the turn: 
        Seek New Prospects: Add 5 to the targets control score. 
        Dont Argue With the Wind: Add 1 to run rolls and charge rolls for the target. 
        Theres No Trading With Some People: The target can use a Retreat ability and still use Shoot abilities later in the turn. In addition, no mortal damage is inflicted on the target by Retreat abilities.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Codewright (SoG)': {
    effects: [
      {
        name: `I'm Watching You`,
        desc: `Effect: Give this unit D3 vexed points.`,
        when: [HERO_PHASE],
      },
      {
        name: `Alright, Listen Up - Once Per Turn`,
        desc: `Declare: If this unit is wholly within 12" of a friendly non-Hero Kharadron Overlords unit, pick a visible enemy unit within 18" of this unit to be the target. Then, choose to spend either 3 or 6 vexed points. 
        Effect: Pick 1 of the following effects to apply to the target for the rest of the turn: 
        Do you see how fast they are going?!: If you spent 3 vexed points, subtract D3 from the targets Move characteristic. If you spent 6 vexed points, halve the targets Move characteristic. 
        Those weapons are against regulation!: If you spent 3 vexed points, subtract 1 from wound rolls for the targets combat attacks. If you spent 6 vexed points, subtract 1 from the Rend characteristic of the targets melee weapons and subtract 1 from wound rolls for the targets combat attacks.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Endrinmaster with Dirigible Suit': {
    effects: [
      {
        name: `Combat Engineers - Once Per Turn`,
        desc: `Declare: Pick this unit and up to 1 friendly Endrinriggers unit wholly within 12" of this unit to be the targets.
        Effect: For the rest of the turn, combat attacks made by the targets against enemy units that charged this turn have Crit (2 Hits).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mobile Repairs`,
        desc: `Declare: Pick a friendly Skyvessel or Zontari Endrin Dock within this unit's combat range to be the target.
        Effect: Roll a dice. On a 2+, Heal (3) the target.`,
        when: [HERO_PHASE],
      },
      //  EndrinmasterHealEffect('3'),
    ],
  },
  'Endrinmaster with Endrinharness': {
    effects: [
      {
        name: `'Aye Aye, Captain! - Once Per Turn`,
        desc: `Declare: Pick a friendly Skyvessel within this units combat range to be the target. 
        Effect: For the rest of the turn: 
        The target can use a Retreat or Run ability and still use Shoot abilities later in the turn. 
        No mortal damage is inflicted on the target by Retreat abilities.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mobile Repairs`,
        desc: `Declare: Pick a friendly Skyvessel or Zontari Endrin Dock within this unit's combat range to be the target.
        Effect: Roll a dice. On a 2+, Heal (3) the target.`,
        when: [HERO_PHASE],
      },
      // EndrinmasterHealEffect('3'),
    ],
  },
  'Aether-Khemist': {
    effects: [
      //...AetherKhemistEffects],
      {
        name: `Aetheric Augmentation - Once Per Turn`,
        desc: `Declare: Pick a friendly Arkanaut Company unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, add 1 to the Rend characteristic of the target's ranged weapons for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Atmospheric Isolation - Passive`,
        desc: `Effect: Subtract 1 from charge rolls for enemy units within 9" of this unit.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  /* 'Bjorgen Thundrik': {
    effects: [
      {
        name: `Toxic Gases`,
        desc: `Once per battle, at the start of the combat phase, you can say this unit will release toxic gases. If you do so, for each enemy unit within 6" of this unit, roll a number of dice equal to the number of models in that unit that are within 6" of this unit. For each 5+, that enemy unit suffers 1 mortal wound.`,
        when: [START_OF_COMBAT_PHASE],
      },
      {
        name: `Paymaster`,
        desc: `Once per turn, this unit can issue a command to a friendly THUNDRIK's PROFITEERS unit without a command point being spent.`,
        when: [DURING_GAME],
      },
    ],
  },
  "Thundrik's Profiteers": {
    effects: [
      {
        name: `Khazgan Drakkskewer`,
        desc: `Khazgan Drakkskewer has a Wounds characteristic of 3. In addition, Khazgan Drakkskewer can fly.`,
        when: [DURING_GAME],
      },
      {
        name: `Protect the Boss`,
        desc: `While this unit is wholly within 3" of a friendly BJORGEN THUNDRIK, he has a ward of 4+.`,
        when: [WARDS_PHASE],
      },
    ],
  }, */
  'Aetheric Navigator': {
    effects: [
      {
        name: `Aethersight - Passive`,
        desc: `Effect: This unit can use Unbind abilities as if it had Wizard (1).`,
        when: [HERO_PHASE],
      },
      {
        name: `Read the Winds - Once Per Turn`,
        desc: `Declare: Pick a friendly Skyvessel or Auto-Endrin within this unit's combat range and that is not in combat to be the target.
        Effect: Remove the target from the battlefield and set it up again on the battlefield more than 9" from all enemy units. Then, if the target is a Skyvessel, you can remove this unit from the battlefield and set it up again on the battlefield wholly within 6" of the target and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Arkanaut Admiral': {
    /* mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Bring Every Gun to Bear', 'Command the Skies'])],
    }, */
    effects: [
      {
        name: `The Admiral's Flagship - Once Per Turn`,
        desc: `Declare: Pick a friendly Flagship wholly within 12" of this unit to be the target.
        Effect: For the rest of this phase, each time the target uses a Shoot ability, you can reroll 1 of the hit rolls made for taht ability.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Bring Every Gun to Bear! - Once Per Turn`,
        desc: `Declare: Pick a friendly Skyvessel wholly within 24" of this unit to be the target. 
        Effect: For the rest of the turn, add 1 to the Attacks characteristic of the target's ranged weapons.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Grundstok Thunderers': {
    effects: [
      {
        name: `Specialist Grundstok Ammunition - Once Per Turn - Reaction: You declared a Shoot ability for this unit`,
        desc: `Declare: Pick Shieldbreaker ammunition or Thunderdrakk ammunition.
        Effect: If all of the attacks made for that Shoot ability target the same enemy unit, after that Shoot ability has been resolved, roll a dice and add the number of damage points allocated to the target by that Shoot ability. If the roll is higher than the target's Control characteristic, apply the following effect to the target based on the ammunition type picked:
        Shieldbreaker: Ward rolls cannot be made for the target until the start of your next turn.
        Thunderdrakk: That target has a maximum control score of 1 until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Brokk Grungsson, Lord-Magnate of Barak-Nar': {
    /* mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Command the Fleet'])],
    }, */
    effects: [
      {
        name: `Moustache-mounted Aetherblasters`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
      {
        name: `First Rule of Grungsson`,
        desc: `Declare: Pick up to 2 other friendly Skyfarer units within this units combat range to be the targets. 
        Effect: Add 1 to the Attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Command the Fleet - Once Per Battle`,
        desc: `Declare: Pick up to 3 visible friendly Skyvessels wholly within 24" of this unit that are not in combat to be the targets. 
        Effect: Each target can use a Run ability and still use Shoot and/or Charge abilities later in the turn.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  Skywardens: {
    effects: [
      {
        name: `Timed Charges`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+: 
        Inflict an amount of mortal damage on the target equal to the roll. 
        This unit can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [END_OF_TURN],
      },
      //  SkyhookEffect,
      // GrapnelLauncherEffect,
    ],
  },
  Endrinriggers: {
    effects: [
      {
        name: `Emergency Field Repairs`,
        desc: `Declare: Pick a friendly Skyvessel or Zontari Endrin Dock within this unit's combat range to be the target.
        Effect: Make a field repairs roll of D6 for each model in this unit. For each 4-5, Heal (1) the target. For each 6, Heal (2) the target.`,
        when: [END_OF_TURN],
      },
      // DrillEffect('Launcher', '6'),
      //  SkyhookEffect,
      // GrapnelLauncherEffect,
    ],
  },
  'Arkanaut Company': {
    effects: [
      {
        name: `Grizzled Buccaneers - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that charged this turn and is in combat with this unit to be the target.
        Effect: Roll a dice. On a 3+:
        This unit can immediately use a Shoot ability as if it were your shooting phase but all of its attacks must target the target enemy unit.
        For the rest of the phase, this unit's Privateer Heavy Weapons have Shoot in Combat.`,
        when: [COMBAT_PHASE],
      },
      // SkyhookEffect,
    ],
  },
  'Grundstok Gunhauler': {
    effects: [
      {
        name: `Transport Capacity - Passive`,
        desc: `Effect: This unit can transport 1 friendly Kharadron Overlords Infantry unit with a model count of up to 5 (see Battle Traits).`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Long-Line Slings - Passive`,
        desc: `Effect: When you use the 'Transport Skyfarers' ability for this unit, you can pick units in combat to be targets.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Light Bomb Racks`,
        desc: `Declare: Pick an enemy unit that does not have Fly and that this unit passed across this phase to be the target. 
        Effect: Roll 4 dice. For each 4+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Aethershot Overwatch - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that charged this turn and is in combat with this unit to be the target.
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      /* BombRacksEffect,
      EmbarkedEffect,
      EmbarkingDeployEffect,
      EmbarkingEffect,
      DisembarkEffect,
      DisembarkFromDestroyedVessel,
      DrillEffect('Cannon', '5+'),
      SkyCannonEffect, */
    ],
  },
  'Grundstok Gunhauler (SoG)': {
    effects: [
      {
        name: `Transport Capacity - Passive`,
        desc: `Effect: This unit cannot transport any friendly units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Attack Squadron - Passive`,
        desc: `Effect: While this unit is wholly within 12" of any other friendly Grundstok Gunhaulers, it can use Shoot abilities even if it used the Run ability in the same turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Fighter Vessels`,
        desc: `Effect: If this unit used a Shoot ability this phase, this unit can move D6". It cannot end that move in combat.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Arkanaut Frigate': {
    effects: [
      {
        name: `Assault Boat`,
        desc: `Declare: This unit cannot use this ability if it is in combat or has used a RUN or Retreat ability this turn. Pick a number of units up to its Transport Capacity that are wholly within 6" of it, that are not in combat and that have not charged this turn to be the targets. Then, make a charge roll of 2D6. 
        Effect: Remove the targets from the battlefield. Then, this unit must move a distance up to the value of the charge roll and must end the move within 1/2" of a visible enemy unit. Then, set up the targets wholly within this unit's combat range. If this unit is in combat, the targets can be set up in combat and have Strike-First for the rest of the turn. This unit and the targets have charged, and the targets cannot use any more Core abilities for the rest of the phase.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Transport Capacity - Passive`,
        desc: `Effect: This unit can transport up to 2 friendly Kharadron Overlords Infantry units with a combined model count of up to 12 (see Battle Traits).`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Heavy Sky Ordnance is 3.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Incoming! - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that charged this turn and is in combat with this unit to be the target. 
        Effect: Roll a dice. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Medium Bomb Racks`,
        desc: `Declare: Pick an enemy unit that does not have Fly and that this unit passed across this phase to be the target. 
        Effect: Roll 6 dice. For each 4+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      /*  BulwarksOfIron,
      BombRacksEffect,
      FlyingTransportEffect,
      EmbarkedEffect,
      EmbarkingDeployEffect,
      EmbarkingEffect,
      DisembarkEffect,
      DisembarkFromDestroyedVessel,
      ShipSkyhookEffect,
      SkyCannonEffect, */
    ],
  },
  'Arkanaut Ironclad': {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Great Sky Ordnance is 4.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Heavy Bomb Racks`,
        desc: `Declare: Pick an enemy unit that does not have Fly and that this unit passed across this phase to be the target. 
        Effect: Roll 10 dice. For each 4+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Transport Capacity - Passive`,
        desc: `Effect: This unit can transport up to 3 friendly Kharadron Overlords Infantry units with a combined model count of up to 22 (see Battle Traits).`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Incoming! - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that charged this turn and is in combat with this unit to be the target. 
        Effect: Roll a dice. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      /* BulwarksOfIron,
      BombRacksEffect,
      FlyingTransportEffect,
      EmbarkedEffect,
      EmbarkingDeployEffect,
      EmbarkingEffect,
      DisembarkEffect,
      DisembarkFromDestroyedVessel,
      ShipSkyhookEffect,
      SkyCannonEffect, */
    ],
  },
  'Drekki Flynt': {
    effects: [
      {
        name: `Captain of the Aelsling`,
        desc: `Declare: Pick an Arkanaut Frigate in this unit's regiment to be the target. This unit can use this ability while in reserve, and the target can also be in reserve.
        Effect: The target has the Aelsling keyword. Add 1 to the Damage characteristic of the target's Boarding Weapons for the rest of the battle.`,
        when: [DURING_SETUP],
      },
      {
        name: `She Can Handle It! - Passive`,
        desc: `Effect: You can reroll run rolls and charge rolls for the Aelsling while it is wholly within 12" of this unit.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },

      {
        name: `Auxiliary Skyhook`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+: 
        inflict an amount of mortal damage on the target equal to the roll.
        Subtract 1 from wound rolls made for the target's attacks for the rest of the turn.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Null-Khemist': {
    effects: [
      {
        name: `Protection of the Void - Passive`,
        desc: `Effect: While they are wholly within 12" of this unit, friendly Skyfarer units have Ward (5+) against mortal damage inflicted by Spell abilities, Prayer abilities and abilities used by Manifestations.`,
        when: [DURING_GAME],
      },
      {
        name: `Nullsuit - Passive`,
        desc: `Effect: Double the Damage characteristic of this unit's weapons for attacks that target a Priest, Wizard or Manifestation.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Vongrim Harpoon Crew': {
    effects: [
      {
        name: `Light Endrinpacks`,
        desc: `Effect: If this unit is in combat, it can move 2D6" but must end that move in combat.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Vongrim Salvagers': {
    effects: [
      {
        name: `Spotter's Flaregun`,
        desc: `Declare: Pick an objective within 9" of this unit to be the target.
        Effect: Roll a dice. On a 3+, apply the following effects for the rest of the turn:
        Add 1 to hit rolls for combat attacks made by friendly Skyfarer units that target a unit that is contesting the target objective.
        Add 1 to the Rend characteristic of melee weapons used by friendly Vongrim Salvagers and Vongrim Harpoon Crew units for attacks that target a unit that is contesting the target objective.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Fjori`s Flamebearers': {
    /* mandatory: {
       prayers: [keyPicker(prayers, ['Vessel of Sigmar'])],
     }, */
    effects: [
      {
        name: `Grimhold Exile: Last of the Lodge-fire - Once Per Battle`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a number of dice equal to the targets Health characteristic. For each 4+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Grimhold Exile: Honour to Grimnir! - Once Per Battle`,
        desc: `Declare: Pick up to 3 friendly Fyreslayers Infantry units wholly within 12" of this unit to be the targets. 
        Effect: You can reroll charge rolls for the targets for the rest of the turn`,
        when: [HERO_PHASE],
      },
      {
        name: `Auric Hearthguard: Molten Rockbolts - Passive`,
        desc: `Effect: Each time a shooting attack made by this unit scores a critical hit, subtract 1" from the target units Move characteristic until the start of your next turn. This ability cannot reduce the target units unmodified Move characteristic below half.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Hearthguard Berzerkers: Duty Unto Death - Passive`,
        desc: `Effect: While any friendly Fyreslayers Infantry Heroes are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Hearthguard Berzerkers with Poleaxes: Smouldering Braziers`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
      {
        name: `Hearthguard Berzerkers with Broadaxes: Fires of Vengeance - Passive`,
        desc: `Effect: While this unit is within the combat ranges of any damaged friendly Fyreslayers Heroes, add 1 to the Attacks characteristic of this unit's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Vulkite Berzerkers with Slingshields: Berserk Fury - Passive`,
        desc: `Effect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 5+, inflict 1 mortal damage on the attacking unit aer the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Vulkite Berzerkers with Handaxes: Whirlwind of Destruction - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units melee weapons if this unit charged this turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Toe to Toe - Passive`,
        desc: `Effect: Subtract 10 from the control scores of enemy Monsters while they are in combat with any units in this Regiment of Renown.`,
        when: [END_OF_TURN],
      },
      {
        name: `Grimnir's Defiance - Passive`,
        desc: `Effect: Units in this Regiment of Renown cannot be picked to be the target of Rampage abilities used by enemy units.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Saviours of Cinderfall': {
    effects: [
      {
        name: `Callis and Toll: Right Tools for the Job - Passive`,
        desc: `Effect: Double the Damage characteristic of this units weapons for attacks that target Wizards, Priests and Manifestations.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Callis and Toll: Wily to the Last - Passive`,
        desc: `Effect: If this unit has 2 models and would be automatically destroyed, it is not automatically destroyed. Instead, 1 model in this unit is slain.`,
        when: [DURING_GAME],
      },
      {
        name: `Callis and Toll: Get it Done - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Tolls Companions unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Toll's Companions: Hidden Agents`,
        desc: `Declare: Pick this unit and a friendly Callis and Toll unit in the same regiment as this unit if those units have not been deployed. 
        Effect: Set up those units in reserve in the shadows. Those units have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Toll's Companions: Saviours of Cinderfall - Passive`,
        desc: `Effect: While a friendly Callis and Toll unit is wholly within this units combat range, both this unit and that Callis and Toll unit have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Toll's Companions: Emerge from the Shadows`,
        desc: `Declare: Pick this unit if it is in the shadows. 
         Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units. Then, set up the Callis and Toll unit that was set up in the shadows with this unit wholly within 6" of it and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Duty Bound - Passive`,
        desc: `Effect: While every model in the same unit in the Regiment of Renown is contesting the same objective, add 1 to save rolls and ward rolls for that unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Sigmar's Justice - Once Per Turn`,
        desc: `Declare: Pick an enemy unit to be marked for justice. You can pick a unit that is in reserve. 
         Effect: For the rest of the battle, add 1 to wound rolls for combat attacks made by units in this Regiment of Renown that target a unit that is marked for justice.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'ROR: Norgrimm`s Rune Throng': {
    effects: [
      {
        name: `Runelord: Runes of Spellbreaking - Passive`,
        desc: `Effect: This unit can use the Unbind ability as if it had Wizard (1).`,
        when: [HERO_PHASE],
      },
      {
        name: `Runelord: Forgefire: Chant value of 5`,
        desc: `Declare: Pick a friendly Cities of Sigmar Duardin unit wholly within 12" of this unit to be the target, then make a chanting roll of D6. 
        Effct: Until the start of your next turn, add 1 to the Rend characteristic of the targets melee weapons. In addition, if the chanting roll was 10+, pick another friendly Cities of Sigmar Duardin unit wholly within 12" of this unit. Add 1 to the Rend characteristic of that units melee weapons until the start of your next turn as well.`,
        when: [HERO_PHASE],
      },
      {
        name: `Irondrakes: Cinderblast Bomb - Once Per Turn`,
        desc: `Declare: If this unit is not in combat, pick a visible enemy unit within 6" of it to be the target. 
        Effect: Roll a dice. On a 3+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Longbeards: I Thought Duardin Were Made of Sterner Stuff! - Passive`,
        desc: `Effect: Add 2 to the control scores of friendly Cities of Sigmar Duardin units, excluding Longbeards units, while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Rune of Restored Hearth - Once Per Battle`,
        desc: `Effect: If the Runelord in the Regiment of Renown is contesting an objective, for the rest of the battle, units in this Regiment of Renown have Ward (5+) while they are contesting that objective.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wrath and Ruin: Chant value of 4`,
        desc: `Declare: Pick the Runelord in this Regiment of Renown to chant this prayer, pick a visible enemy unit within 18" of them to be the target, then make a chanting roll of D6. 
         Effect: Roll 6 dice. If the chanting roll was 8+, roll 9 dice instead. For each 5+, inflict 1 mortal damage on the target. If 3 or more damage points are allocated to the target as a result of those dice rolls, ignore positive modifiers to save rolls for the target until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Elthwin`s Thorns': {
    effects: [
      {
        name: `Arch-Revenant: Crescent Shield`,
        desc: `Effect: Pick 1 of the following effects to apply to this unit for the rest of the turn: 
        Defensive Stance: This unit has Ward (4+). 
        Aggressive Stance: Add 1 to the Attacks characteristic of this units melee weapons, and add 1 to wound rolls for this units combat attacks.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gossamid Archers: Forest Fighters - Passive`,
        desc: `Effect: This unit has a coherency range of 2".`,
        when: [DURING_GAME],
      },
      {
        name: `Gossamid Archers: Zephyrspites - Once Per Turn`,
        desc: `Effect: If this unit used a Shoot ability this phase, this unit can move D6". It cannot move into combat during any part of that move.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Gossamid Champion`,
        desc: `Declare: Pick the Arch-Revenant in this Regiment of Renown to use this ability, the pick a visible enemy unit within 12" of them to be the target. 
        Effect: Until the start of your next turn, subtract X from charge rolls for the target, where X is the number of damage points allocated to the target this phase by shooting attacks made by the Gossamid Archers unit in the Regiment of Renown, to a maximum of 6.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Flight of the Zephyrspites - Once Per Turn`,
        desc: `Effect: If both units in this Regiment of Renown are within each others combat range and neither unit is in combat, roll a dice. On a 3+, remove both units from the battlefield, then set them up again within each others combat range, wholly within 3" of a terrain feature and more than 9" from all enemy units.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'ROR: Gotrek Gurnisson': {
    effects: [
      {
        name: `Command Ability - Unstoppable Battle Fury`,
        desc: `Effect: This unit can use 2 Fight abilities this phase. After the first is used, however, this unit has Strikelast for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `I'll Get There Myself! - Passive`,
        desc: `Effect: This unit cannot be set up in reserve and cannot be targeted by abilities that would remove it from the battlefield.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: The Blacktalons': {
    effects: [
      {
        name: `Neave Blacktalon: Justice from Azyr`,
        desc: `Effect: Add 1 to the Damage characteristic of this units Whirlwind Axes for attacks that target Heroes.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Neave Blacktalon: Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Neave Blacktalon: Windrider`,
        desc: `Declare: If this unit is in combat or charged this turn, this unit can make a pile-in move. Then, if this unit is in combat, you must pick 1 or more enemy units to be the target(s) of this units attacks. 
        Effect: Resolve combat attacks against the target unit(s). Then, roll a dice. On a 3+, remove this unit from the battlefield and set it up again on the battlefield more than 3" from all enemy units and wholly within the combat range of a friendly The Blacktalons unit that is not in combat.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Neave's Companions: Shield of Azyr`,
        desc: `Effect: While any friendly The Blacktalons Heroes are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Lorai: Aquatic Illusions`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target this unit.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `Lorai: Nebulous Sea-Fog: Casting value of 6`,
        desc: `Effect: Until the start of your next turn, while a friendly The Blacktalons unit is wholly within 6" of this unit, if the unmodified hit roll for a shooting attack that targets that unit is 1-5, the attack fails and the attack sequence ends.`,
        when: [HERO_PHASE],
      },
      {
        name: `Justice Will Be Served - Once Per Battle`,
        desc: `Declare: Pick the Neave Blacktalon in this Regiment of Renown to be the target if it is in combat with an enemy Hero. 
        Effect: The target can use 2 Fight abilities this phase. Each time it does so, if it is in combat with an enemy Hero, all of its attacks must target an enemy Hero. In addition, after the first Fight ability is used, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Bundo Whalebiter': {
    effects: [
      {
        name: `Get Orf Me Land! - Once Per Turn`,
        desc: `Declare: Pick an objective within 1" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, move the target 2D6" to a new position on the battlefield more than 1" from all models, terrain features and other objectives.`,
        when: [HERO_PHASE],
      },
      {
        name: `Stuff 'Em In Me Net - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll 3 dice. For each roll that is at least double the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Son of Behemat - Passive`,
        desc: `Effect: If this unit would be automatically destroyed, it is not automatically destroyed. Instead, allocate 6 damage points to it (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Longshanks - Passive`,
        desc: `Effect: This unit can pass through models in non-Monster units and parts of terrain features that are less than 4" tall.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Shipwrecka Warclub is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Dead Cunning for a Gargant - Once Per Turn`,
        desc: `Effect: For the rest of the turn, add 1 to the Attacks characteristic of this units weapons. Then, roll a dice. On a 4+, this unit has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: The Horizon Seekers': {
    effects: [
      {
        name: `Lord-Aquilor: Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Lord-Aquilor: Ride the Winds Aetheric`,
        desc: `Declare: If this unit is not in combat, you can pick up to 2 friendly Vanguard-Palladors units that are not in combat to be the targets. 
        Effect: Remove this unit and the targets (if any) from the battlefield. Set this unit up again on the battlefield more than 9" from all enemy units. Then, set up each target wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Vanguard-Hunters: Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Vanguard-Hunters: Astral Compass - Once Per Battle`,
        desc: `Declare: Pick an enemy unit to be the target. 
        Effect: The target has the Hunted keyword for the rest of the battle.`,
        when: [DURING_SETUP],
      },
      {
        name: `Vanguard-Hunters: Star-Marked - Passive`,
        desc: `Effect: Add 2" to this units Move characteristic while a Hunted enemy unit is on the battlefield. In addition, add 1 to hit rolls for this units attacks that target a Hunted enemy unit.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Vanguard Palladors: Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Vanguard Palladors with Javelins: Charging Volley`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit in combat with it to be the target. 
        Effect: This unit can immediately use a Shoot ability as if it were your shooting phase, but it must target that enemy unit. This units Starstrike Javelins have Shoot in Combat this phase.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Hunters' Cohesion - Passive`,
        desc: `Effect: Each time this Regiment of Renown's Lord-Aquilor uses its Ride the Winds Aetheric ability, you can pick all units in this Regiment of Renown that are not in combat to be the targets. 
        In addition, add 1 to hit rolls for attacks made by this Regiment of Renown's Lord-Aquilor and Vanguard-Palladors units that target a Hunted enemy unit.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Valnirs Stormwing': {
    effects: [
      {
        name: `Knight-Draconis: Wrath of the Draconith - Once Per Turn`,
        desc: `Declare: Pick a friendly Stormdrake Guard unit within this units combat range to be the target. 
        Effect: Roll a dice. On a 2+, add 1 to the Attacks characteristic of both this units and the targets Draconiths Fangs and Talons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Knight-Draconis: Arcane Heritage - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If this unit or a friendly Stormdrake Guard unit wholly within 12" of this unit was picked to be the target of that spell, roll a dice. On a 4+, ignore the effect of that spell on this unit or that friendly unit. This unit can use this ability more than once per phase but only once per Spell ability.`,
        when: [HERO_PHASE],
      },
      {
        name: `Knight-Draconis: Extremis Chamber - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Stormdrake Guard: Extremis Chamber - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Hour of Retribution - Once Per Battle`,
        desc: `Effect: For the rest of the turn:
        Add 1 to wound rolls for attacks made by units in this Regiment of Renown.
        Add 1 to save rolls for units in this Regiment of Renwon.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Enforcers of the Tithe': {
    effects: [
      {
        name: `Mortisan Ossifector: Refined Creations - Once Per Turn`,
        desc: `Declare: Pick a friendly Gothizzar Harvester, Morghast Archai or Morghast Harbingers unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, add 1 to the Rend characteristic of the targets melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mortek Guard: Shieldwall - Passive`,
        desc: `Effect: Ignore all modiifers to save rolls for this unit (positive and negative) for the rest of the turn if this unit did not use a Move ability in the same turn.`,
        when: [DURING_GAME],
      },
      {
        name: `Gothizzar Harvester: Bone Harvest - Passive`,
        desc: `Effect: Each time an enemy model in combat with this unit is slain, give this unit 1 bone-tithe point. This unit can have a maximum of 6 bone-tithe points at once.`,
        when: [DURING_GAME],
      },
      {
        name: `Gothizzar Harvester: Gruesome Surgery - Once Per Turn`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. For each model slain by this ability, you can return 1 slain model to a friendly Mortek Guard unit wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gothizzar Harvester: Repair Construct`,
        desc: `Declare: Pick a friendly Ossiarch Bonereapers unit wholly within 12" of this unit to be the target. 
        Effect: Return a number of slain models to the target with a combined Health characteristic equal to the number of bone-tithe points this unit has. Then, reset this units bone-tithe points to 0.`,
        when: [END_OF_TURN],
      },
      {
        name: `Collect the Tithe - Once Per Turn`,
        desc: `Declare: Pick the Gothizzar Harvester in this Regiment of Renown to use this ability, then pick a non-Hero Infantry unit (friendly or enemy) to be the target. 
        Effect: Roll a dice. If the roll equals or exceeds the targets Health characteristic, 1 model in the target unit is slain, then give the unit using this ability 1 bone-tithe point.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Soul Tax: Casting value of 7`,
        desc: `Declare: Pick the Mortisan Ossifector in this Regiment of Renown to cast this spell, then: 
        Pick a friendly unit, excluding units in this Regiment of Renown, to be the target. 
        Pick a unit in this Regiment of Renown to be the recipient. 
        The target and the recipient must be wholly within 12" of and visible to the caster. Then, make a casting roll of 2D6. 
        Effect: Until the start of your next turn: 
        The target has a maximum control score of 1. 
        Add 1 to hit rolls and wound rolls for the recipients combat attacks.`,
        when: [HERO_PHASE],
      },
      {
        name: `Rebuild on the March`,
        desc: `Declare: Pick the Gothizzar Harvester in this Regiment of Renown to use this ability if it has 6 bone-tithe points. Then, pick another unit in this Regiment of Renown that has been destroyed to be the target. 
        Effect: Reset the Gothizzar Harvesters bone-tithe points to 0. Then, set up a replacement of the target unit with half the number of models (rounding up) wholly within 9" of the Gothizzar Harvester and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'ROR: Nurgles Gift': {
    effects: [
      {
        name: `Nurglings: Endless Swarm - Passive`,
        desc: `Effect: Heal (3) this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Incubation Period`,
        desc: `Declare: This ability must be used to deploy this Regiment of Renown. 
        Effect: Set up the units in this Regiment of Renown in reserve festering within. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Bursting with Life - Passive`,
        desc: `Effect: If a friendly non-Nurgles Gift unit would be destroyed, before the last model is removed from play, roll a dice. Add 1 to the roll for each other friendly non-Nurgles Gift unit that has been destroyed this battle. On a 5+, pick a friendly unit that is festering within and set it up wholly within 6" of that model. It can be set up in combat.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Stumblefoot Gargant': {
    effects: [
      {
        name: `Mancrusher Gargant: Stuff 'Em in Me Bag - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll is at least double the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Projectile Vomit - Once Per Turn`,
        desc: `Declare: Pick this unit to use this ability if it has not used a Rampage ability this turn. Then, pick a point on the battlefield within 6" of this unit and pick all other units (friendly and enemy) within 3" of that point to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on that target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Bellowing Mockery - Once Per Turn`,
        desc: `Declare: Pick this unit to use this ability if it has not used a Rampage ability this turn, then pick an enemy unit within this units combat range to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Whatre You Lookin At? - Once Per Turn`,
        desc: `Declare: Pick this unit to use this ability if it charged this turn and has not used a Rampage ability this turn. Then, pick an enemy unit within 9" of this unit to be the target. 
        Effect: Roll 2D6. This unit can move a number of inches equal to the roll. It can pass through enemy models and must end that move in combat with the target.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'ROR: Bloodthirsty Shiver': {
    effects: [
      {
        name: `Hunt of the Bloodthirsty Shiver`,
        desc: `Effect: If both units in this Regiment of Renown are within each other's combat range, pick 1 of the following effects to apply until the start of your next turn:
        Evasive Approach: While both units in this Regiment of Renown are within each other's combat range, subtract 1 from hit rolls for attacks that target them.
        Ferocious Attack: While both units in this Regiment of Renown are within each other's combat range, their Allopex's Ferocious Bites have Crit (2 Hits).`,
        when: [HERO_PHASE],
      },
      {
        name: `Akhelian Allopex: Bloodthirsty Predators - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units Allopexs Ferocious Bite while it is within 6" of any damaged enemy units or while it is within 6" of any enemy units that had any models slain in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Akhelian Allopex: Ensnared`,
        desc: `Declare: Pick an enemy Monster or Cavalry unit that had any damage points allocated to it this turn by this units shooting attacks to be the target. 
        Effect: Roll a dice. On a 3+, until the start of your next turn, subtract 1 from the number of dice rolled when making charge rolls for the target, to a minimum of 1.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'ROR: Namarti Shore Raid': {
    effects: [
      {
        name: `In the Shadow of the Ethersea`,
        desc: `Declare: This ability must be useded to deploy this Regiment of Renown instead of the Deploy Unit ability or the Deploy Regiment ability.
        Effect: Set up the units in this Regiment of Renown in reserve in the ethersea. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Launch the Attack`,
        desc: `Declare: Pick each unit in this Regiment of Renown that is in the ethersea.
        Effect: Set up each unit on the battlefield wholly within 7" of a battlefield edge, more than 9" from all enemy units and within the combat range of another unit in this Regiment of Renown. Then, each unit can immediately move D3". The units cannot move into combat during any part of that move.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Akhelian Thrallmaster: Akhelian Insights - Passive`,
        desc: `Effect: Melee weapons used by friendly Namarti units have Crit (2 Hits) while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Akhelian Thrallmaster: Thrallmaster - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Namarti Thralls unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Namarti Reavers: Strike on the Move - Passive`,
        desc: `Effect: This unit can use Shoot abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Namarti Thralls: Sweeping Blows - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: If any damage points inflicted by attacks made as part of that Fight ability are allocated to any enemy units, subtract 1 from wound rolls for attacks made by those enemy units for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: The Scarlet Jury': {
    effects: [
      {
        name: `Punishment Fits the Crime - Passive`,
        desc: `Effect: You believe the 'Accusations of Regicide' Delusion (see Grand Justice Gormayne's warscroll).`,
        when: [DURING_SETUP],
      },
      {
        name: `Grand Justice Gormayne: Arrest Those Miscreants`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target.
        Effect: Roll a dice. On a 3+, until the start of your next turn, the target has Strike-Last while it is in combat with any friendly Flesh-Eater Courts Heroes and any friendly Serfs or Knights units.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Grand Justice Gormayne: Accusations of Regicide (Delusion) - Passive`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target.
        Effect: While you believe this Delusion, add 1 to the Damage characteristic of melee weapons used by friendly Serfs and Knights units while they are wholly within 12" of any friendly Flesh-Eater Courts Heroes that had any damage points allocated to them in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Royal Decapitator: Executioner's Entourage - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Serfs unit that has not used a Fight ability this turn and is within this unit's combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, the target's melee weapons have Crit (2 Hits) for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Royal Decapitator: Off with their Head! - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Immediately after that Fight ability has been resolved, pick an enemy Infantry Hero in combat with this unit to be the target. Roll 2D6. If the roll exceeds the target's Health characteristic, it is automatically destroyed.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Cryptguard: Elite Guardians - Once Per Turn`,
        desc: `Effect: If this unit is in combat with any enemy units that charged this turn, roll a dice. On a 3+, for the rest of the turn, this unit has Strike-First but ward rolls cannot be made for it.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Cryptguard: Royal Bodyguard - Passive`,
        desc: `Effect: While any friendly non-Monster Flesh-Eater Courts Heroes are wholly within this unit's combat range, both this unit and those Heroes have Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
