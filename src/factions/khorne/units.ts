import { keyPicker, tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_ANY_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_CHARGE_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_MOVEMENT_PHASE,
  START_OF_ROUND,
  START_OF_TURN,
  TURN_TWO_END_OF_MOVEMENT_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import CommandAbilities from './command_abilities'
import Prayers from './prayers'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

/*const BrassCladShieldEffect = {
  name: `Brass-clad Shield`,
  desc: `This unit has a ward of 5+ against mortal wounds caused by spells and mortal wounds caused by the abilities of endless spells.`,
  when: [WARDS_PHASE],
  shared: true,
}

const ScornOfSorceryEffect = {
  name: `Scorn of Sorcery`,
  desc: `This unit can attempt to unbind 1 spell in the enemy hero phase in the same manner as a WIZARD.`,
  when: [HERO_PHASE],
  shared: true,
}

const MurderousChargeEffect = {
  name: `Murderous Charge`,
  desc: `After this unit makes a charge move, pick 1 enemy unit and roll a dice for each model in this unit that is within 3" of that enemy unit. For each 2-4, that enemy unit suffers 1 mortal wound. For each 5+, that enemy unit suffers 2 mortal wounds.`,
  when: [CHARGE_PHASE],
  shared: true,
}

const WarriorEffects = [
  {
    name: `Gorefists`,
    desc: `If the unmodified save roll for an attack made with a melee weapon that targets a unit armed with Goreaxes and Gorefists is 6, the attacking unit suffers 1 mortal wound after all of its attacks have been resolved.`,
    when: [SAVES_PHASE],
    shared: true,
  },
  {
    name: `No Respite`,
    desc: `If this unit is included in a Blades of Khorne army, each time a model in this unit is slain, you can make 2 murder rolls instead of 1.`,
    when: [WOUND_ALLOCATION_PHASE],
    shared: true,
  },
]

const BraveryStandardBearerEffect = {
  name: `Standard Bearer`,
  desc: `Add 1 to the Bravery characteristic of this unit while it includes any Icon Bearers.`,
  when: [BATTLESHOCK_PHASE],
  shared: true,
}

const ChargeMusicianEffect = {
  name: `Musician`,
  desc: `Add 1 to charge rolls for this unit while it includes any Hornblowers.`,
  when: [CHARGE_PHASE],
  shared: true,
}

const CollarOfKhorneEffects = [
  {
    name: `Collar of Khorne`,
    desc: `This unit can attempt to unbind one spell in the enemy hero phase in the same manner as a WIZARD.`,
    when: [HERO_PHASE],
    shared: true,
  },
  {
    name: `Collar of Khorne`,
    desc: `This unit can attempt to dispel one endless spell at the start of your hero phase in the same manner as a WIZARD.`,
    when: [START_OF_HERO_PHASE],
    shared: true,
  },
]

const UnflaggingHunterEffect = {
  name: `Unflagging Hunter`,
  desc: `Add 2 to charge rolls for this unit.`,
  when: [CHARGE_PHASE],
  shared: true,
}

const SlaughterousChargeEffect = {
  name: `Slaughterous Charge`,
  desc: `After this unit makes a charge move, pick 1 enemy unit within 3" of this unit and roll a dice. On a 2+. that enemy unit suffers 3 mortal wounds.`,
  when: [CHARGE_PHASE],
  shared: true,
}

const DrawnInForTheKillEffect = {
  name: `Drawn in for the Kill`,
  desc: `At the start of the enemy movement phase, pick 1 enemy unit within 3" of this model. That unit cannot retreat in that phase.`,
  when: [START_OF_MOVEMENT_PHASE],
  shared: true,
} */

const Units = {
  // Daemons
  Skarbrand: {
    effects: [
      {
        name: `Roar of Total Rage - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll either 3 dice or a number of dice equal to the number of damage points this unit has. For each 4+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Skarbrand's Rage - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, or if it did not use a Fight ability last turn, the effects of the 'Blood-drenched' ability apply to this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Inescapable Wrath`,
        desc: `Effect: Add 1 to the number of dice rolled when making charge rolls for this unit, to a maximum of 3.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Bloodthirster of Unfettered Fury': {
    effects: [
      {
        name: `Beckon the Hunt`,
        desc: `Declare: Pick a friendly non-Unique Blades of Khorne Daemon unit to be the target.
        Effect: For the rest of the turn, add 1 to the number of dice rolled when making charge rolls for the target, to a maximum of 3.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Mighty Axe of Khorne is 4 .`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ensnaring Lash - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: If the target is in combat with this unit when the target is picked to use a Fight ability: 
        It must pick this unit to be the target of the pile-in move (Core Rules, 15.3). 
        Subtract 1 from hit rolls and wound rolls for attacks made as part of that Fight ability against this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Bloodthirster of Insensate Rage': {
    effects: [
      {
        name: `Outrageous Carnage - Passive`,
        desc: `Effect: Each time an attack made by this unit scores a critical hit, inflict D3 mortal damage on each enemy unit within 8" of it (and continue the attack sequence).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Great Axe of Khorne is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Shattering Charge - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. If the target is Infantry, inflict an additional 3 mortal damage on it.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Wrath of Khorne Bloodthirster': {
    effects: [
      {
        name: `Commander of Tyrants - Once Per Turn`,
        desc: `Declare: Pick another visible friendly non-Unique Bloodthirster units to be the targets. 
        Effect: Add 1 to the Attacks characteristic of each targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Wrathful Dominance - Passive`,
        desc: `Effect: Add 1 to hit rolls for this unit's attacks that target an enemy Hero.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Mighty Axe of Khorne and Bloodail is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Vengeance of Khorne - Once Per Turn`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target. 
        Effect: Roll 8 dice. For each 4+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Skulltaker: {
    effects: [
      {
        name: `Heroes' Bane`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target. 
        Effect: For the rest of the turn, while the target is in combat with this unit, this unit has Strike-first but all combat attacks it makes must target that enemy Hero.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Eternal Duel`,
        desc: `Effect: If an enemy Hero had any damage points allocated to it by this unit's combat attacks this turn and that Hero was destroyed this turn, Heal (X) this unit, where X is the number of damage points this unit has.`,
        when: [END_OF_TURN],
      },
      {
        name: `Drawn in Blood - Once Per Battle - End of Enemy Turn`,
        desc: `Declare: Pick an enemy Hero unit that used a Fight ability this turn to be the target.
        Effect: Remove this unit from the battlefield and set it up again on the battlefield in combat with the target and not in combat with any other enemy units.`,
        when: [END_OF_TURN],
      },
    ],
  },
  Karanak: {
    effects: [
      {
        name: `First of the Pack - Passive`,
        desc: `Effect: While this unit is wholly within 12" of a friendly Flesh Hounds unit, add 2 to charge rolls for this unit. In addition, while any friendly Flesh Hounds units are wholly within 12" of this unit, they can ignore the effect of the Beast ability.`,
        when: [CHARGE_PHASE, END_OF_TURN],
      },
      //  UnflaggingHunterEffect,
      {
        name: `Stalk the Prey`,
        desc: `Declare: Pick this unit and a friendly Flesh Hounds unit to be the targets.
        Effect: Remove the targets from the battlefield and set them up again on the battlefield more than 6" from this unit's quarry and more than 9" from all other enemy units. The unit of Flesh Hounds must also be set up wholly within 12" of this unit.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Prey of the Blood God`,
        desc: `Effect: Pick an enemy Hero to be this units quarry. You can pick a Hero in reserve.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Flesh Hounds': {
    effects: [
      {
        name: `Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Hunters of Mystics - Passive`,
        desc: `Effect: If the casting roll for an enemy Wizard within 12" of this unit contains 2 or more results of 1 or 2, the spell is miscast.
        If the chanting roll for an enemy Priest within 12" of this unit is an unmodified 2, the prayer fails and its effect is not resolved.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Skullmaster, Herald of Khorne': {
    effects: [
      {
        name: `Slaughterous Charge`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit within 1" of it to be the target. 
        Effect: Make a crushing charge roll of D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      //  SlaughterousChargeEffect,
      {
        name: `Herald of Trampling Death - Once Per Battle`,
        desc: `Declare: Pick a friendly Bloodcrushers unit within this units combat range to be the target. 
        Effect: For the rest of the turn, weapons used by this unit and the target have Charge (+1 Damage).`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Bloodmaster, Herald of Khorne': {
    /* mandatory: {
      prayers: [keyPicker(Prayers, ['Bloodmark'])],
    }, */
    effects: [
      {
        name: `The Blood Must Flow - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Bloodletters unit that has not used a Fight ability this turn and is within this unit's combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, for the rest of the turn, add 1 to hit rolls for combat attacks made by this unit and that friendly Bloodletters unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Bloodletters: {
    effects: [
      {
        name: `Ceaseless Violence`,
        desc: `Effect: If this unit is in combat, it can move 3". It can pass through the combat ranges of enemy units and must end that move in combat.`,
        when: [COMBAT_PHASE],
      },
      // ChargeMusicianEffect,
    ],
  },
  Bloodcrushers: {
    effects: [
      {
        name: `Crushing Onslaught - Passive`,
        desc: `Effect: If the unmodified charge roll for this unit is 8+: 
        For the rest of the phase, this unit can pass through models in enemy units.
        Enemy CAVALRY units passed through by this unit in this phase cannot make pile-in moves for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
      // MurderousChargeEffect,
    ],
  },
  'Bloodcrushers (SoG)': {
    /* mandatory: {
      prayers: [keyPicker(Prayers, ['Blood Call'])],
    }, */
    effects: [
      {
        name: `Brass Stampede - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit in combat with it to be the target. 
        Effect: Roll a dice. On a 3+, this unit can move 2D6". It can pass through models in the target unit and must end that move in combat.`,
        when: [CHARGE_PHASE],
      },
    ],
  },

  'Herald of Khorne on Blood Throne': {
    /* mandatory: {
      prayers: [keyPicker(Prayers, ['Blood Call'])],
    }, */
    effects: [
      {
        name: `Offering of Blood - Once Per Turn`,
        desc: `Declare: Pick a friendly unit within 3" of this unit to be the target. 
        Effect: Allocate 3 damage points to the target (ward rolls cannot be made for those damage points). For the rest of the turn, add 1 to this unit's power level, to a maximum of 2.`,
        when: [HERO_PHASE],
      },
      {
        name: `Blood Marked - Passive`,
        desc: `Effect: This unit has Ward (4+) against damage inflicted by Spell abilities and abilities used by Manifestations.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Skull Cannon': {
    effects: [
      {
        name: `Grind their Bones, Seize their Skulls - Passive`,
        desc: `Effect: If any enemy models are slain by a Fight ability used by this unit, after that Fight ability has been resolved, this unit can immediately use a Shoot ability as if it were your shooting phase.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gruesome Bombardment - Passive`,
        desc: `Effect: If any damage points are allocated to an enemy unit by a Shoot ability used by this unit, subtract 3 from that enemy units control score for the rest of the turn.`,
        when: [END_OF_TURN],
      },
    ],
  },
  /*'Exalted Greater Daemon of Khorne': {
    mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ['Rejoice in Exalted Slaughter'])],
    }, 
    effects: [
     DrawnInForTheKillEffect,
      {
        name: `The Land Rebels`,
        desc: `At the start of your hero phase, roll a dice for each enemy unit within 8" of any friendly models with this ability. On a 5+, that enemy unit suffers 1 mortal wound.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Mazarall the Butcher': {
    mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ["The Butcher's Due"])],
    },
    effects: [
      {
        name: `Bloody Charge`,
        desc: `Roll a dice for each enemy unit that is within 1" of this model after this model makes a charge move. On a 4+ that unit suffers D3 mortal wounds.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Harrow Meat's Hunger`,
        desc: `At the end of the combat phase, if any enemy models were slain by wounds inflicted by this model's attacks in that combat phase, add 1 to the Attacks characteristic of Harrow Meat for the rest of the battle.`,
        when: [END_OF_COMBAT_PHASE],
      },
      {
        name: `The Ancyte Shield`,
        desc: `This model can attempt to unbind 1 spell in the enemy hero phase in the same manner as a WIZARD.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Korghos Khul': {
    effects: [
      {
        name: `Aqshy's Bane`,
        desc: `This unit is eligible to fight in the combat phase if it is within 8" of an enemy unit instead of 3", and it can move an extra 5" when it piles in.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Collar of Khorne`,
        desc: `This unit can attempt to unbind 1 spell in the enemy hero phase in the same manner as a WIZARD.`,
        when: [HERO_PHASE],
      },
      {
        name: `Reality-splitting Axe`,
        desc: `Each time this unit fights, wounds caused by its Blood-dark Claws must be allocated before wounds caused by its Axe of Khorne. At the end of any phase, if any wounds caused by this unit's Axe of Khorne in that phase were allocated to an enemy model and that enemy model has not been slain, roll a dice. On a 5+, that enemy model is slain.`,
        when: [END_OF_ANY_PHASE],
      },
      {
        name: `Lord of the Goretide`,
        desc: `If this unit is included in a Goretide army, once per battle, at the start of the combat phase, you can say that Khul will unleash the wrath of the Goretide. If you do so, until the end of that phase, each time a friendly GORETIDE BLOODBOUND model is slain, you can make 1 additional murder roll.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  }, */
  'Skarr Bloodwrath': {
    effects: [
      {
        name: `The Slaughterborn`,
        desc: `Declare: This unit can use this ability if it has been destroyed. 
        Effect: Roll 2D6. On an 8+, set up a replacement unit on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Murderous Paragon - Passive`,
        desc: `Effect: If this unit is in combat, add 1 to the Attacks characteristic of melee weapons used by friendly Wrathmongers units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /* 'Valkia the Bloody': {
    effects: [
      {
        name: `The Red Angel of Slaughter`,
        desc: `During deployment, instead of setting up this unit on the battlefield, you can place it to one side and say that it is set up in the skies as a reserve unit. If you do so, at the end of your movement phase, you can set up this unit on the battlefield more than 9" from all enemy units. Then, you can pick 1 enemy unit within 10" of this unit and roll a dice. On a 1, nothing happens. On a 2+, that enemy unit suffers a number of mortal wounds equal to the roll.`,
        when: [DURING_SETUP],
      },
      {
        name: `The Red Angel of Slaughter`,
        desc: `If you set this unit up in reserve, at the end of your movement phase, you can set up this unit on the battlefield more than 9" from all enemy units. Then, you can pick 1 enemy unit within 10" of this unit and roll a dice. On a 1, nothing happens. On a 2+, that enemy unit suffers a number of mortal wounds equal to the roll.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
      {
        name: `Daemonshield`,
        desc: `This unit has a ward of 5+.`,
        when: [WARDS_PHASE],
      },
      {
        name: `The Gaze of Khorne`,
        desc: `Add 3 to the Bravery characteristic of other friendly BLOODBOUND units while they are wholly within 16" of this unit. However, friendly BLOODBOUND units cannot retreat while they are wholly within 16" of this unit.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  }, */
  'Mighty Lord of Khorne': {
    /* mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ["'Bring Me Their Skull!'"])],
    }, */
    effects: [
      {
        name: `Lord of the Bloodbound - Passive`,
        desc: `Effect: Add 1 to wound rolls for friendly Bloodbound Infantry units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Bring Me Their Skull! - Once Per Turn`,
        desc: `Declare: Pick a friendly Bloodbound Infantry Hero wholly within 12" of this unit to be the target. 
        Effect: The target has Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Mighty Lord of Khorne (SoG)': {
    /* mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ["'Bring Me Their Skull!'"])],
    }, */
    effects: [
      {
        name: `Command Ability: Howl of Blood-Curdling Savagery - Once Per Battle`,
        desc: `Declare: If this unit is in combat, pick a visible friendly Bloodbound unit that is wholly within 12" of this unit and not in combat to be the target. Then, make a charge roll of 2D6. 
        Effect: The target can move a distance up to the value of the charge roll. That unit can move through the combat ranges of any enemy units and must end that move within 12" of a visible enemy unit. If it does so, the target has charged.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Reality-Splitting Axe - Once Per Turn`,
        desc: `Declare: This unit can use this ability even if it has been destroyed. Pick an enemy Hero that was allocated any damage points by this units Axe of Khorne this turn to be the target. 
        Effect: Roll a dice. On a 5+, the target is automatically destroyed and cannot be replaced for the rest of the battle.`,
        when: [END_OF_TURN],
      },
    ],
  },
  Bloodsecrator: {
    effects: [
      {
        name: `Rage of Khorne - Once Per Battle`,
        desc: `Effect: Add 1 to the Attacks characteristics of melee weapons used by friendly Bloodbound units for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Icon of the Blood God - Passive`,
        desc: `Effect: If a friendly Bloodbound unit wholly within 12" of this unit uses the Rally command, you can make 3 additional rally rolls of D6.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Lord of Khorne on Juggernaut': {
    effects: [
      // BrassCladShieldEffect,
      // SlaughterousChargeEffect,
      {
        name: `Slaughterous Charge`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit within 1" of it to be the target. 
        Effect: Make a crushing charge roll of D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Lord of the Brass Stampede - Passive`,
        desc: `Effect: If this unit charged this turn, for the rest of the turn, the following effects apply to friendly Blades of Khorne Cavalry units while they are wholly within 18" of this unit: 
        Add 1 to charge rolls for those units. 
        You can reroll crushing charge rolls for those units.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  Slaughterpriest: {
    /* mandatory: {
      prayers: [keyPicker(Prayers, ['Blood Boil'])],
    }, */
    effects: [
      //ScornOfSorceryEffect
      {
        name: `Blood Sacrifice - Once Per Turn`,
        desc: `Declare: Pick a unit (friendly or enemy) within this unit's combat range to be the target.
        Effect: Roll a D3. On a 2+: 
        Inflict an amount of mortal damage on the target equal to the roll. 
        This unit gains 1 ritual point.`,
        when: [HERO_PHASE],
      },
      {
        name: `Scorn of Sorcery - Passive`,
        desc: `Effect: This unit can use Unbind abilities as if it had Wizard (1).`,
        when: [HERO_PHASE],
      },
    ],
  },
  Skullgrinder: {
    effects: [
      {
        name: `Bone-Crushing Strikes - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target.
        Effect: Roll a dice. If the roll is equal to or less than the target's control score, the target has Strike-Last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Tempered by Fury - Once Per Battle`,
        desc: `Declare: Pick another friendly Bloodbound Hero within 8" of this unit to be the target. 
        Effect: Pick 1 of the targets melee weapons. Add 1 to the Rend characteristic of that weapon for the rest of the battle.`,
        when: [DURING_SETUP],
      },
    ],
  },
  Deathbringer: {
    effects: [
      {
        name: `Trophies of Glorious Deaths - Reaction: Opponent declared a command for a unit within 8" of this unit`,
        desc: `Effect: Roll a dice. On an 5+, that command has no effect, it still counts as having been used and the command points spent to use it are still lost.`,
        when: [DURING_GAME],
      },
      {
        name: `Killer of Kings - Once Per Turn`,
        desc: `Declare: Pick each enemy unit and Manifestation in combat with this unit to be a target.
        Effect: Roll 2D6 for each target. If the roll exceeds the target's Health characteristic, 1 model from that unit is slain or, if the target is a Manifestation, it is automatically destroyed.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Aspiring Deathbringer': {
    effects: [
      {
        name: `Furious Warleader - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Blood Warriors unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. Add 1 to wound rolls for attacks made by this unit and the target for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Exalted Deathbringer': {
    effects: [
      {
        name: `Glorius Ascent - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units Deathbringer Weapon for each glorious ascent token it has.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `First of the Gorechosen`,
        desc: `Effect: If any damage points were allocated to an enemy unit by this units combat attacks this turn and that enemy unit has been destroyed, Heal (5) this unit and give this unit a glorious ascent token.`,
        when: [END_OF_TURN],
      },
    ],
  },
  Bloodstoker: {
    effects: [
      {
        name: `Whipped to Fury - Once Per Turn`,
        desc: `Declare: Pick a friendly non-Hero Bloodbound unit within this units combat range to be the target. 
        Effect: For the rest of the turn, the target can use Charge abilities even if it used a Run ability in the same turn.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Blood Warriors': {
    effects: [
      //  ...WarriorEffects,
      // BraveryStandardBearerEffect,
      {
        name: `No Respite - Passive`,
        desc: `Effect: While this unit is contesting an objective you do not control, it has WARD (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
  Bloodreavers: {
    effects: [
      {
        name: `Blood for the Blood God! - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units melee weapons for the rest of the turn if this unit charged in the same turn.`,
        when: [COMBAT_PHASE],
      },
      // BraveryStandardBearerEffect,
      // ChargeMusicianEffect,
    ],
  },
  /*  "Garrek's Reavers": {
    effects: [
      {
        name: `Champion`,
        desc: `Garrek Gorebeard is the unit champion. Add 1 to the Attacks characteristic of that model's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Grisly Trophies`,
        desc: `If this unit is included in a Blades of Khorne army, at the end of the combat phase, if this unit is on the battlefield and any enemy models were slain by attacks made by this unit in that phase, you receive 1 additional Blood Tithe point.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  },
  "Magore's Fiends": {
    effects: [
     // ...WarriorEffects,
      {
        name: `Riptooth`,
        desc: `The first time this unit is set up on the battlefield, you must summon 1 FLESH HOUNDS unit consisting of 1 model to the battlefield and add it to your army. That model must not be a Gore Hound and must be on a 50mm base. Set up that FLESH HOUNDS unit wholly within 3" of this unit and more than 9" from all enemy units.`,
        when: [DURING_GAME],
        rule_sources: [rule_sources.BATTLETOME_KHORNE, rule_sources.ERRATA_APRIL_2023],
      },
    ],
  },
  /*Riptooth: {
    effects: [...CollarOfKhorneEffects, UnflaggingHunterEffect],
  }, */
  Wrathmongers: {
    effects: [
      {
        name: `Crimson Haze - Passive`,
        desc: `Effect: While this unit is in combat, add 1 to the Attacks characteristic of melee weapons used by friendly Bloodbound units, excluding Wrathmongers units, while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Bloodfury - Passive`,
        desc: `Declare: Pick a visible enemy model within 3" of this unit to be the target.
        Effect: Both players roll off. If you win the roll-off, pick a melee weapon that the target is armed with. Your opponent must pick a visible unit in their army within 3" of the target (they can pick the target's own unit, and even if it is a single-model unit).
        Your opponent must resolve combat attacks for the target using the melee weapon you picked against the unit they picked.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Mighty Skullcrushers': {
    effects: [
      {
        name: `Slaughterous Charge`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll of D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      //  BrassCladShieldEffect,
      //  MurderousChargeEffect,
    ],
  },
  Skullreapers: {
    effects: [
      {
        name: `Trial of Skulls - Passive`,
        desc: `Effect: Add 8 to this unit's control score while it is in combat.`,
        when: [END_OF_TURN],
      },
    ],
  },
  /* 'Scyla Anfingrimm': {
    effects: [
      {
        name: `Brass Collar of Khorne`,
        desc: `This unit can attempt to unbind 1 spell in the enemy hero phase in the same manner as a WIZARD.`,
        when: [HERO_PHASE],
      },
      {
        name: `Bestial Leap`,
        desc: `This unit is eligible to fight in the combat phase if it is within 8" of an enemy unit instead of 3", and it can move an extra 5" when it piles in.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
  Khorgoraths: {
    effects: [
      {
        name: `Horrific Predators - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, the target cannot use commands for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Feast Upon Their Bones`,
        desc: `Effect: Subtract 3 from the control scores of enemy non-Monster units while they are in combat with this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  /* 'Vorgaroth the Scarred on Skalok the Skull Host of Khorne': {
    effects: [
      {
        name: `Monstrous Trophies`,
        desc: `Add 1 to wound rolls for attacks made with this model's Skull Cleaver Axe of Khorne that target a MONSTER. In addition, if the unmodified wound roll for an attack made with the Skull Cleaver Axe of Khorne is 6, that attack causes D3 mortal wounds to the target in addition to any damage it inflicts.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Crushing Bulk`,
        desc: `Roll a dice for each enemy unit that is within 1" of this model after this model makes a charge move. On a 2+, that unit suffers D3 mortal wounds.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Eternal Hunt`,
        desc: `Instead of setting up this model on the battlefield, you can place it to one side and say that it is in reserve. If you do so, at the end of your second movement phase, you must set up this model anywhere on the battlefield more than 9" from all enemy units.`,
        when: [DURING_SETUP],
      },
      {
        name: `Eternal Hunt`,
        desc: `If you set this unit up in reserve, at the end of your second movement phase, you must set up this model anywhere on the battlefield more than 9" from all enemy units.`,
        when: [TURN_TWO_END_OF_MOVEMENT_PHASE],
      },
      {
        name: `Fettered Servitude`,
        desc: `Once per battleshock phase, before you take a battleshock test for a friendly KHORNE unit wholly within 12" of this model, you can say that this model demands unwavering obedience. If you do so, 1 model in that unit is slain, but you do not have to take a battleshock test for that unit in that phase.`,
        when: [BATTLESHOCK_PHASE],
      },
      {
        name: `Fuelled by Death`,
        desc: `In your hero phase, you can pick 1 friendly model within 3" of this model and roll a dice. If you do so and the roll is equal to or greater than that model's Wounds characteristic, that model is slain and you can heal a number of wounds allocated to this model equal to the slain model's Wounds characteristic.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wings of Fury`,
        desc: `Subtract 3 from casting and unbinding rolls for enemy WIZARDS that are within 18" of this model.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Skaarac the Bloodborn': {
    effects: [
      {
        name: `Life-eater`,
        desc: `At the end of the combat phase, if any enemy models were slain by wounds inflicted by this model's attacks in that combat phase, you can heal up to D3 wounds allocated to this model.`,
        when: [END_OF_COMBAT_PHASE],
      },
      {
        name: `Infernal Iron`,
        desc: `Subtract 2 from casting rolls for enemy WIZARDS while they are within 12" of this model.`,
        when: [HERO_PHASE],
      },
      {
        name: `Towering Horror`,
        desc: `Subtract 1 from the Bravery characteristic of enemy units while they are within 12" of this model.`,
        when: [BATTLESHOCK_PHASE],
      },
      {
        name: `Undying Hate`,
        desc: `If this model is slain, before removing it from play, roll a dice for each enemy model within 3" of this model. On a 4+, that model's unit suffers 1 mortal wound. This model is then removed from play.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Call of the Skull Throne`,
        desc: `Add 1 to charge rolls for friendly KHORNE units that are wholly within 12" of this model.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  /*'Dromm, Wounder of Worlds': {
    mandatory: {
      prayers: [keyPicker(Prayers, ['Wound the Realm'])],
    },
    effects: [ScornOfSorceryEffect],
  },
  'Gorechosen of Dromm': {
    effects: [
      {
        name: `Gorechosen of Dromm`,
        desc: `While this unit is wholly within 3" of a friendly DROMM, he has a ward of 4+.`,
        when: [WARDS_PHASE],
      },
      {
        name: `Throttle`,
        desc: `At the end of the combat phase, if this unit includes the Gorehulk, you can pick 1 enemy model within 3" of this unit and roll a dice. If the roll is more than double that model's Wounds characteristic, it is slain.`,
        when: [END_OF_COMBAT_PHASE],
      },
      {
        name: `White-hot Anger`,
        desc: `At the end of the combat phase, roll a dice for each enemy model within 3" of this unit's Skullgrinder Herax. For each 5+, that enemy model's unit suffers 1 mortal wound.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  }, */
  'Realmgore Ritualist': {
    /* mandatory: {
      prayers: [keyPicker(Prayers, ['Bloodhex'])],
    }, */
    effects: [
      {
        name: `Desecrating Blood Runes - Once Per Battle`,
        desc: `Declare: Pick an objective or terrain feature within this units combat range to be the target. 
        Effect: For the rest of the battle, add 1 to hit rolls for combat attacks made by friendly Bloodbound units while they are wholly within 12" of the target.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Claws of Karanak': {
    effects: [
      {
        name: `The Scent of Blood`,
        desc: `Effect: This unit can use the Normal Move ability as if it were your movement phase.`,
        when: [DURING_SETUP],
      },
      {
        name: `Pack Hunters - Passive`,
        desc: `Effect: While this unit is wholly within 12" of a friendly Flesh Hounds unit or a friendly Karanak, this units combat attacks score critical hits on unmodified hit rolls of 5+.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Brand`s Oathbound': {
    effects: [
      {
        name: `Gunnar Brand: Carve a Path to Glory`,
        desc: `Declare: This unit can only use this ability if it is in combat with an enemy Hero. 
        Effect: This unit can use 2 Fight abilities this phase. After the first is used, however, this unit has Strike-last for the rest of the turn. This unit can only use the second Fight ability if it is in combat with an enemy Hero, and if it does so, it must pick an enemy Hero to be the target of all of its attacks.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gunnar Brand: Oath of Bloodshed - Once Per Battle`,
        desc: `Declare: This unit can only use this ability if any enemy Heroes were slain by this units combat attacks this turn. 
        Effect: Friendly Gunnars Oathsworn units have Ward (4+) for the rest of the battle.`,
        when: [END_OF_TURN],
      },
      {
        name: `Singri Brand: Swift as the Wind - Passive`,
        desc: `Effect: Only critical hits score successful hits for shooting attacks that target this unit.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Singri Brand: Uncanny Shot - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units Singris Warbow for attacks that target enemy units that are within 6" of a friendly Gunnar Brand.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Oathsworn Kin: Withering Death: Casting value of 5`,
        desc: `Declare: Pick a visible enemy Hero within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Inflict 1 mortal damage on the target and subtract 1 from the Attacks characteristic of the targets melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Oathsworn Kin: Broken Nadja - Passive`,
        desc: `Effect: While this units Broken Nadja is on the battlefield, it has Wizard (1).`,
        when: [HERO_PHASE],
      },
      {
        name: `Favour of the Gods - Once Per Turn`,
        desc: `Effect: If any enemy Heroes were slain this turn by the Gunnar Brand in this Regiment of Renown: 
        Heal (5) each unit in this Regiment of Renown. 
        Add 1 to the Attacks characteristic of melee weapons used by units in this Regiment of Renown for the rest of the battle.`,
        when: [END_OF_TURN],
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
  'ROR: One-Eyed Grunnock': {
    effects: [
      {
        name: `Hurled Body`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll is at least double the targets Health characteristic, 1 model in that unit is slain and you can pick a visible enemy unit within 12" of this unit. Inflict an amount of mortal damage on that unit equal to the targets Health characteristic.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Titanic Boulderclub - Passive`,
        desc: `Effect: If all of the attacks made with this units Titanic Boulderclub target the same enemy unit, for every 5 models in the target unit, add 2 to its Attacks characteristic for the rest of the phase.`,
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
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Titanic Boulderclub is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Shake the Earth - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+: 
        Inflict an amount of mortal damage on the target equal to the roll. If the target is Infantry, double the amount of mortal damage inflicted. 
        Subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
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
  'ROR: Lord Skaldiors Chosen': {
    effects: [
      {
        name: `Chaos Lord on Daemonic Mount: The Knights of Chaos - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Warriors of Chaos Cavalry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to wound rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Chaos Knights: Impaling Charge - Passive`,
        desc: `Effect: If this unit charged this turn, for the rest of the turn, add 1 to the Rend characteristic of its Cursed Lances.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Chaos Warriors: Bringers of Desolation - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units Rune-Etched Weapons while it is contesting an objective you control.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ironclad Despoilers - Passive`,
        desc: `Effect: Add 1 to save rolls for units in this Regiment of Renown while they are contesting an objective you control. 
        Add 1 to wound rolls for units in this Regiment of Renown while they are contesting an objective you do not control.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Godmarked Ascendant': {
    effects: [
      {
        name: `Daemon Prince: Airborne Horror - Passive`,
        desc: `Effect: If this unit has Wings, it has a Move characteristic of 10" and has Fly.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Daemon Prince: The Mounted Skulls of Fallen - Passive`,
        desc: `Effect: If this unit has a Trophy Rack, its Hellforged Weapons also have Anti-Hero (+1 Rend).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Daemon Prince: Immortal Champion`,
        desc: `Effect: Roll a dice. On a 4+, this unit has Strike-First for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Godmarked Legion - Passive`,
        desc: `Effect: The unit in this Regiment of Renown gains the 'Gifts of Chaos' ability and one of the following faction keywords that matches your army's faction.`,
        when: [DURING_GAME],
      },
      {
        name: `Gifts of Chaos - Passive`,
        desc: `Effect:
        If this unit has the Blades of Khorne keyword, add 1 to the Attacks characteristic of its Hellforged Weapons.
        If this unit has the Disciples of Tzeentch keyword, it has Wizard (1).
        If this unit has the Maggotkin of Nurgle keyword, it has Ward (5+).
        If this unit has the Hedonites of Slaanesh keyword, add 1 to run rolls and charge rolls for it.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Squires of the Everchosen': {
    effects: [
      {
        name: `Varghulf Courtier: Bounding Strides - Passive`,
        desc: `Effect: This unit can pass across terrain features as if it had Fly.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Varghulf Courtier: Victory Feast`,
        desc: `Effect: If any models were slain by this unit this turn: 
        Heal (D6) this unit. 
        This unit can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [END_OF_TURN],
      },
      {
        name: `Morbheg Knights: Shrieking Charge`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Morbheg Knights: Predator's Pounce - Passive`,
        desc: `Effect: This unit can use Charge abilities even if it used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on this unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `A Deluded Quest - Once Per Battle`,
        desc: `Declare: Pick an enemy unit to be the target. 
        Effect: The target has the Enemy of the Everchosen keyword.`,
        when: [DURING_SETUP],
      },
      {
        name: `A Quest Well Done - Once Per Battle`,
        desc: `Effect: If the enemy Enemy of the Everchosen unit is destroyed by a unit in this Regiment of Renown, add 10 to the control score of each unit in this Regiment of Renown for the rest of the battle.`,
        when: [END_OF_TURN],
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
  'ROR: Snerks Trogg-Fer-Hire': {
    effects: [
      {
        name: `Dankhold Troggoth: Greater Regeneration`,
        desc: `Effect: Heal (D6) this unit.`,
        when: [START_OF_TURN],
      },
      {
        name: `Dankhold Troggoth: Magical Resistance - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If this unit was picked to be the target of that spell, roll a dice. On a 4+, ignore the effect of that spell on this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Dankhold Troggoth: Wade and Smash - Once Per Turn`,
        desc: `Effect: If this unit is in combat, it can move 6" but must end that move in combat. Then, roll a D3 for each enemy unit within 1" of this unit. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Go Dat Way!`,
        desc: `Declare: Pick the Dankhold Troggoth in this Regiment of Renown to be the target if it is within 12" of the Loonboss in this Regiment of Renown. 
        Effect: For the rest of the turn, the target can still use Charge abilities even if it used a Retreat ability in the same turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Taktikal Cowering - Passive`,
        desc: `Effect: While the Loonboss in this Regiment of Renown is within the combat range of the Dankhold Troggoth in this Regiment of Renown: 
        That Loonboss has Ward (4+). 
        Each time you make a successful ward roll for that Loonboss, allocate 1 damage point to that Dankhold Troggoth after the damage sequence for that Loonboss has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
