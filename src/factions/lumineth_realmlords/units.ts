import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_CHARGE_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_SETUP,
  END_OF_SHOOTING_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_ANY_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_SHOOTING_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import command_abilities from './command_abilities'
import spells from './spells'
import rule_sources from './rule_sources'
import meta_rule_sources from 'meta/rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const getSunmetalWeaponsEffect = (weapon: string) => ({
 /* name: `Sunmetal Weapons`,
  desc: `If the unmodified hit roll for an attack made with a ${weapon} is 6, that attack inflicts 1 mortal wound on the target and the attack sequence ends (do not make a wound or save roll).`,
  when: [COMBAT_PHASE],
  shared: true, */
})

const getVanariWizardsEffect = (minimumModelCountToBeWizard: number, modelToBeWizard: string) => ({
 /* name: `Magic`,
  desc: `The ${modelToBeWizard} is a WIZARD while this unit has ${minimumModelCountToBeWizard} or more models. That model can attempt to cast 1 spell in your hero phase and attempt to unbind 1 spell in the enemy hero phase.`,
  when: [HERO_PHASE],
  shared: true, */
})

const StandardBearerEffect = {
 /* name: `Standard Bearer`,
  desc: `You can reroll battleshock tests for units that include any Standard Bearers.`,
  when: [BATTLESHOCK_PHASE],
  shared: true, */
}

const AllButImmovableEffect = {
/*  name: `All but Immovable`,
  desc: `If this model doesnt not make a charge move in your charge phase, add 1 to the Attacks characteristic of this model's melee weapons until your next movement phase.`,
  when: [CHARGE_PHASE, COMBAT_PHASE],
  shared: true, */
}

const StonemageSymbiosisEffect = {
/* name: `Stonemage Symbiosis`,
  desc: `If this unit is within 12" of a friendly Stonemage, use the top row on this unit's damage table, regardless of how many wounds it has suffered.`,
  when: [DURING_GAME],
  shared: true, */
}

const CrushingBlowEffect = {
/*  name: `Crushing Blow`,
  desc: `If the unmodified hit roll for an attack made with a melee weapon by this unit is 6, that attack causes 1 mortal wound to the target in addition to any damage it inflicts.`,
  when: [COMBAT_PHASE],
  shared: true, */
}
const DeepThinkersEffect = {
/*  name: `Deep Thinkers`,
  desc: `Once per battle, in your hero phase, when this unit attempts to cast its first spell in that phase, it is automatically cast with a casting roll of 9 (do not roll 2d6), but it can be unbound.`,
  when: [HERO_PHASE],
  rule_sources: [meta_rule_sources.BATTLESCROLL_ANDTOR_SEPTEMBER_2023],
  shared: true, */
}
const PurestAetherquartzHitRollEffect = {
 /* name: `Purest Aetherquartz`,
  desc: `Subtract 1 for hit rolls that target this unit. If this unit uses its last Aetherquartz, it can no longer use this ability.`,
  when: [COMBAT_PHASE, SHOOTING_PHASE],
  shared: true, */
}
const PurestAetherquartzCastingEffect = {
 /* name: `Purest Aetherquartz`,
  desc: `Add 1 to the casting roll when attempting to cast Greater Power of Hysh. If this unit uses its last Aetherquartz, it can no longer use this ability.`,
  when: [COMBAT_PHASE, SHOOTING_PHASE],
  shared: true, */
}

const IntoTheGaleOverSaveEffect = {
 /* name: `Into the Gale`,
  desc: `This unit has a ward of 5+.`,
  when: [WARDS_PHASE],
  shared: true, */
}
const LivingCycloneEffect = {
 /* name: `Living Cyclone`,
  desc: `Roll a dice for each enemy unit that is within 3" of this unit after this unit makes a charge move. On a 3+, that unit suffers 1 mortal wound, and subtract 1 from hit rolls for that unit until the end of the next combat phase. The same unit cannot be affected by this ability more than once per phase.`,
  when: [CHARGE_PHASE, COMBAT_PHASE],
  shared: true, */
}

const MoveLikeTheWindEffect = {
 /* name: `Move like the wind`,
  desc: `When you make a pile-in move with this unit, it does not have to finish the move no further from the nearest enemy unit than it was at the start of the move. In addition, when you make a pile-in move with this unit, if it made a charge move in the same turn, it can move an extra 3" when it piles in.`,
  when: [CHARGE_PHASE, COMBAT_PHASE],
  shared: true, */
}

const SpiritOfTheWindEffect = {
 /* name: `Spirit of the Wind`,
  desc: `At the end of your shooting phase, this model can make a normal move or a retreat of 12" (it cannot run). In addition, this unit can retreat and still charge later in the turn.`,
  when: [END_OF_SHOOTING_PHASE],
  shared: true, */
}

const EnduringAsRockEffect = {
 /* name: `Enduring as Rock`,
  desc: `When this unit is targeted by an attack, worsen the Rend characteristic of that attack by 1, to a minimum of 0.`,
  when: [COMBAT_PHASE, SHOOTING_PHASE],
  rule_sources: [meta_rule_sources.BATTLESCROLL_ANDTOR_SEPTEMBER_2023],
  shared: true, */
}

const ShiningCompanyEffect = {
 /* name: `Shining Company`,
  desc: `Subtract 1 from hit rolls for attacks that target this unit if this base of each model in this unit is touching the bases of 2 or more other models in the same unit.`,
  when: [COMBAT_PHASE, SHOOTING_PHASE],
  shared: true, */
}

const SunmetalWeaponEffect = {
 /* name: `Sunmetal Weapons`,
  desc: `If the unmodified hit roll for an attack made by this unit is 6, that attack causes 1 mortal wound to the target and the attack sequence ends (do not make a wound roll or save roll). This ability has no effect made by this unti's mounts.`,
  when: [COMBAT_PHASE],
  shared: true, */
}
const Units = {
  'Archmage Teclis': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Protection of Teclis', 'Storm of Searing White Light'])],
    }, */
    effects: [
      {
        name: `Archmage - Passive`,
        desc: `Effect: Instead of making a casting roll for this unit, you can use a value of 10 for the roll that cannot be modified. In addition, instead of making an unbinding roll or banishment roll for this unit, you can use a value of 8 for the roll that cannot be modified.`,
        when: [HERO_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Celennars Moonbright Talons is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Aura of Celennar - Passive`,
        desc: `Effect: Add 1 to casting rolls for other friendly Lumineth Realm-lords Wizards while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Spirit of the Moon - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, the target cannot use commands for the rest of the turn.`,
        when: [COMBAT_PHASE],
        rule_sources: [
          rule_sources.BATTLETOME_LUMINETH,
          meta_rule_sources.BATTLESCROLL_DEPLETED_RESERVES_APRIL_2023,
        ],
      },
      {
        name: `Storm of Searing White Light: Casting value of 10`,
        desc: `Declare: Pick any number of different visible enemy units within 18" of this unit to be the targets, then make a casting roll of 2D6 (see the Archmage ability). 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [HERO_PHASE],
        rule_sources: [
          rule_sources.BATTLETOME_LUMINETH,
          meta_rule_sources.BATTLESCROLL_DEPLETED_RESERVES_APRIL_2023,
        ],
      },
    ],
  },
  'The Light of Eltharion': {
    effects: [
      {
        name: `Spirit Armour - Passive`,
        desc: `Effect: Ignore all modifiers to save rolls for this unit (positive and negative).`,
        when: [DURING_GAME],
      },
      {
        name: `Supreme Swordmaster - Passive`,
        desc: `Effect: Ignore negative modifiers to hit rolls and wound rolls for this units attacks. In addition, ignore negative modifiers to the characteristics of this units melee weapons.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Lyrior Uthralle, Warden of Ymetrica': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Greater Power of Hysh'])],
    }, */
    effects: [
    //  PurestAetherquartzHitRollEffect,
     // PurestAetherquartzCastingEffect,
      //getSunmetalWeaponsEffect(`Regent's Sword`),
      {
        name: `Solar Flare: Casting value of 7`,
        desc: `Declare: Pick a visible enemy unit or Manifestation wholly within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: If the target is a Manifestation, inflict 3D6 mortal damage on it. Otherwise, roll a dice for each model in the target unit. For each 5+, inflict 1 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Voice of Tyrion - Reaction: You declared the All-out Attack command for a friendly Vanari unit`,
        desc: `Effect: If this unit is wholly within 12" of the unit using the All-out Attack command, no command points are spent to use that command.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Vanari Lord Regent': {
  /*  mandatory: {
      spells: [keyPicker(spells, ['Greater Power of Hysh'])],
    }, */
    effects: [
     // getSunmetalWeaponsEffect(`Regent's Sword`),
     // PurestAetherquartzCastingEffect,
     // PurestAetherquartzHitRollEffect,
     {
      name: `Purest Aetherquartz - Once Per Battle`,
      desc: `Effect: For the rest of the turn, add 1 to casting rolls for this unit and subtract 1 from hit rolls for attacks that target this unit.`,
      when: [HERO_PHASE],
    },
    {
      name: `Charge of the Lumineth - Once Per Battle`,
      desc: `Declare: Pick this unit and up to 2 friendly Vanari Dawnriders units within this units combat range to be the targets. 
      Effect: You can re-roll charge rolls for the targets for the rest of the turn. In addition, if a target charges this phase, add 1 to the Attacks characteristic of that targets weapons for the rest of the turn.`,
      when: [CHARGE_PHASE],
    },
    ],
  },
  'Vanari Bannerblade': {
    effects: [
     // SunmetalWeaponEffect,
      {
        name: `World Banner - Passive`,
        desc: `Effect: Add 3 to the control scores of other friendly Lumineth Realm-lords units while they are wholly within 18" of this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Vanari Auralan Sentinels': {
  /*  mandatory: {
      spells: [keyPicker(spells, ['Power of Hysh'])],
    }, */
    effects: [
    //  getVanariWizardsEffect(5, `High Sentinel`),
      {
        name: `Lofted Shots`,
        desc: `Effect: For the rest of the turn, add 6" to the Range characteristic of this units Auralan Bows but subtract 1 from hit rolls for this units shooting attacks.`,
        when: [SHOOTING_PHASE],
      },
    //  SunmetalWeaponEffect,
    ],
  },
  'Vanari Auralan Wardens': {
  /*  mandatory: {
      spells: [keyPicker(spells, ['Power of Hysh'])],
    }, */
    effects: [
     // SunmetalWeaponEffect,
     // getVanariWizardsEffect(5, `High Warden`),
      {
        name: `Wall of Blades`,
        desc: `Effect: If this unit did not charge this turn and is in combat with an enemy unit that charged this turn, roll a dice. Add 1 to the roll if that enemy unit is Cavalry. On a 4+, this unit has Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
     // ShiningCompanyEffect,
    ],
  },
  'Vanari Dawnriders': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Power of Hysh'])],
    }, */
    effects: [
      {
        name: `Deathly Furrows`,
        desc: `Declare: If this unit charged this phase, pick an enemy Infantry unit within 1" of it to be the target. 
        Effect: Roll a dice for each model in this unit. For each 3+, inflict 1 mortal damage on the target.`,
        when: [CHARGE_PHASE],
      },
     // SunmetalWeaponEffect,
     // getVanariWizardsEffect(3, `Steedmaster`),
     // StandardBearerEffect,
    //  ShiningCompanyEffect,
    ],
  },
  'Vanari Starshard Ballistas': {
    effects: [
      {
        name: `Blinding Bolts - Once Per Battle`,
        desc: `Effect: If all of this units shooting attacks this turn target the same enemy unit, subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Scryhawks`,
        desc: `Effect: For the rest of the turn, add 6" to the Range characteristic of this units Starshard Bolts while it is wholly within 12" of any friendly Vanari Auralan Sentinels units.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Vanari Bladelords': {
    effects: [
      {
        name: `Guardians - Passive`,
        desc: `Effect: While any friendly Scinari Heroes are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Swordmasters - Passive`,
        desc: `Effect: Each time this unit uses a Fight ability, you must pick either the Perfect Strike or Flurry of Blows weapon characteristics for all the attacks it makes with its Sunmetal Blades. 
        In addition, do not use the attack sequence for an attack made with Perfect Strike. Instead, roll a dice. On a 2+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
     // SunmetalWeaponEffect,
     // ShiningCompanyEffect,
    ],
  },
  'Scinari Cathallar': {
  /*  mandatory: {
      spells: [keyPicker(spells, ['Darkness of the Soul'])],
    }, */
    effects: [
     // GenericEffects.WizardOneSpellEffect,
      {
        name: `Absorb Despair - Passive`,
        desc: `Effect: Ignore negative modifiers to the control scores of friendly Lumineth Realm-lords units while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Darkness of the Soul`,
        desc: `Declare: Pick an enemy unit within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, subtract D6 from the targets control score for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Scinari Enlightener': {
  /*  mandatory: {
      spells: [keyPicker(spells, ['Twinned Tether'])],
    }, */
    effects: [
     // GenericEffects.WizardTwoSpellsEffect,
     // DeepThinkersEffect,
      {
        name: `Rune of Enthlai - Once Per Turn - Reaction: You declared the Speed of Hysh, Overwhelming Heat or Ethereal Blessings spell for this unit`,
        desc: `Effect: If that spell is successfully cast, roll a dice. On a 3+, after resolving the effect of that spell, this unit can immediately cast that spell a second time using the same casting roll. Do not count the second spell towards the number of Spell abilities this unit can use this turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Ethereal Blessings: Casting value of 6`,
        desc: `Declare: Pick a visible friendly Lumineth Realm-lords Infantry unit wholly within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Ignore all modifiers to save rolls for the target (positive and negative) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Scinari Calligrave': {
  /* mandatory: {
      spells: [keyPicker(spells, ['Erasure'])],
    }, */
    effects: [
    //  GenericEffects.WizardOneSpellEffect,
    //  DeepThinkersEffect,
      {
        name: `Realmscribe - Once Per Turn - Reaction: You declared a Summon Spell ability for this unit`,
        desc: `Effect: Change the casting roll for that spell to a value of 8 that cannot be modified.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Scinari Loreseeker': {
    effects: [
     // GenericEffects.WizardOneSpellEffect,
      {
        name: `Lone Agent - Passive`,
        desc: `Effect: Add 5 to this units control score while it is more than 9" from all other friendly units.`,
        when: [END_OF_TURN],
      },
      {
        name: `Independent Operative`,
        desc: `Effect: If this unit has not been deployed, set it up anywhere on the battlefield not in combat with any enemy units. This unit has now been deployed.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Alarith Spirit of the Mountain': {
   /* mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Faith of the Mountains'])],
    }, */
    effects: [
    //  StonemageSymbiosisEffect,
     // AllButImmovableEffect,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Stoneheart Worldhammer is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Stonemage Symbiosis - Passive`,
        desc: `Effect: The Battle Damaged ability has no effect on this unit while it is wholly within 12" of a friendly Alarith Stonemage.`,
        when: [DURING_GAME],
      },
      {
        name: `Stoneheart Shockwave - Once Per Turn`,
        desc: `Declare: If this unit did not charge this turn, pick an enemy unit in combat with it to be the target. 
        Effect: Roll a dice. On a 4+, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Alarith Stoneguard': {
    effects: [
    //  StandardBearerEffect,
     // CrushingBlowEffect,
     // EnduringAsRockEffect,
      {
        name: `Fortitude of the Earth - Passive`,
        desc: `Effect: This unit has Ward (5+) while all of its models are contesting an objective you control.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Alarith Stonemage': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Gravitic Redirection'])],
    }, */
     effects: [
     // EnduringAsRockEffect,
     // GenericEffects.WizardOneSpellEffect,
      {
        name: `Stonemage stance`,
        desc: `Declare: Pick a friendly Alarith Aelf unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, add 1 to the Rend characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Living Fissure: Casting value of 7`,
        desc: `Declare: Pick a point on the battlefield within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Draw a straight line between the target and the closest part of this units base. Roll a D3 for each unit (friendly and enemy) that the line passes across. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Avalenor, the Stoneheart King': {
  /*  mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Unshakeable Faith of the Mountains'])],
    }, */
    effects: [
    //  StonemageSymbiosisEffect,
    //  AllButImmovableEffect,
     // EnduringAsRockEffect,
     {
      name: `Battle Damaged - Passive`,
      desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Firestealer Hammers is 4.`,
      when: [COMBAT_PHASE],
     }, 
     {
      name: `Stonemage Symbiosis - Passive`,
      desc: `Effect: The Battle Damaged ability has no effect on this unit while it is wholly within 12" of a friendly Alarith Stonemage.`,
      when: [DURING_GAME],
    },
     {
        name: `Command Ability - Unshakeable Faith of the Mountains`,
        desc: `Declare: Pick up to 3 dierent friendly Alarith Aelf units wholly within 12" of this unit to be the targets. 
        Effect: Add 1 to the Attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Unbreakable Bulwark - Once Per Turn`,
        desc: `Declare: If this unit did not charge this turn, pick an enemy unit in combat with it to be the target. 
        Effect: Roll a dice. On a 2+, subtract 1 from the Rend characteristic of the targets melee weapons for the rest of the turn and add 1 to the Attacks characteristic of this units melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Ellania and Ellathor, Eclipsian Warsages': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Salvation of Hysh'])],
    }, */
    effects: [
      // GenericEffects.WizardTwoSpellsEffect,
      {
        name: `Equal Prodigies`,
        desc: `Declare: Pick whether Ellania will take the lead or Ellathor will take the lead. 
        Effect: If Ellania takes the lead, until the start of your next turn, add 1 to this units power level and it has Ward (4+). If Ellathor takes the lead, until the start of your next turn, add the current battle round number to the Damage characteristic of Altairi.`,
        when: [HERO_PHASE],
      },
      {
        name: `Total Eclipse: Casting value of 8`,
        desc: `Declare: Make a casting roll of 2D6. 
        Effect: Until the start of your next turn, the first time an enemy unit uses a command within 18" of this unit, your opponent must spend an additional command point to use that command.`,
        when: [HERO_PHASE],
      },
      {
        name: `Sudden Translocation`,
        desc: `Effect: This unit can use this ability if any enemy models were slain by it this turn. Heal (D6) this unit. Then, remove it from the battlefield and set it up again on the battlefield more than 9" from all enemy units. When using the Equal Prodigies ability in your next turn, you must pick Ellania to take the lead.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Hurakan Windmage': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Windblast Vortex'])],
    }, */
    effects: [
    //  GenericEffects.WizardOneSpellEffect,
     // MoveLikeTheWindEffect,
      {
        name: `Transporting Vortex: Casting value of 7`,
        desc: `Declare: Pick a visible friendly Lumineth Realm-lords unit wholly within 12" of this unit and not in combat to be the target, then make a casting roll of 2D6. 
        Effect: Remove the target from the battlefield and set it up again on the battlefield more than 9" from all enemy units`,
        when: [HERO_PHASE],
      },
      {
        name: `Windleap`,
        desc: `Declare: Pick a friendly Hurakan Windchargers unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, add 3" to the targets Move characteristic for the rest of the turn and the target has Fly for the rest of the turn.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Hurakan Windchargers': {
    effects: [
    //  StandardBearerEffect,
    //  MoveLikeTheWindEffect,
      {
        name: `Windcharger Arrows - Passive`,
        desc: `Effect: Ward rolls cannot be made for damage points inflicted by this units shooting attacks`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Sevireth, Lord of the Seventh Wind': {
    effects: [
     // IntoTheGaleOverSaveEffect,
    //  LivingCycloneEffect,
     // MoveLikeTheWindEffect,
     // SpiritOfTheWindEffect,
     {
      name: `The Living Gale - Passive`,
      desc: `Effect: This unit cannot be targeted by shooting attacks made by enemy units that are more than 9" from this unit.`,
      when: [SHOOTING_PHASE],
    },
      {
        name: `Spirit of the Wind - Passive`,
        desc: `Effect: While friendly Hurakan units are wholly within 12" of this unit, they can use Shoot and/or Charge abilities even if they used a Run or Retreat ability in the same turn and no mortal damage is inflicted on them by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Searing Desert Winds`,
        desc: `Declare: Pick up to 3 dierent enemy units in combat with this unit to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll and subtract 1 from wound rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Hurakan Spirit of the Wind': {
    effects: [
      // IntoTheGaleOverSaveEffect, SpiritOfTheWindEffect, LivingCycloneEffect
      {
        name: `Spirit of the Wind - Passive`,
        desc: `Effect: While friendly Hurakan units are wholly within 12" of this unit, they can use Shoot and/or Charge abilities even if they used a Run or Retreat ability in the same turn and no mortal damage is inflicted on them by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Hunters of the Majestic Beasts - Passive`,
        desc: `Effect: The Damage characteristic of this units Bow of the Winds Vengeance is 3 for attacks that target Monsters.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Living Cyclone - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll, then this unit can move 6", but it must end that move in combat.`,
        when: [COMBAT_PHASE],
      },
      ],
  },
  'Ydrilan Riverblades': {
    effects: [
      // IntoTheGaleOverSaveEffect, SpiritOfTheWindEffect, LivingCycloneEffect
      {
        name: `Relentless as the Driving Current`,
        desc: `Effect: This unit can move 2D6". It can pass through models in enemy units but must end that move in combat.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Travel the Waterways`,
        desc: `Effect: Remove this unit from the battlefield and set it up again on the battlefield wholly within 6" of a battlefield edge and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      ],
  },
  /*'Myari Lightcaller': {
    mandatory: {
      spells: [keyPicker(spells, ['Dazzling Light'])],
    }, 
    effects: [
     // GenericEffects.WizardOneSpellEffect,
    //  DeepThinkersEffect,
      {
        name: `Scryowl Familiar`,
        desc: `Add 1 to casting, unbinding, and dispelling rolls for this model.`,
        when: [HERO_PHASE],
      },
      {
        name: `Scryowl Familiar`,
        desc: `You can pick 1 enemy unit within 24" and not visible. The target becomes visible.`,
        when: [START_OF_HERO_PHASE, START_OF_SHOOTING_PHASE],
      },
    ],
  },
  "Myari's Purifiers": {
    effects: [
      {
        name: `Guardians`,
        desc: `Before you allocate a wound or mortal wound to a friendly Myari Lightcaller within 3" of this unit, or instead of making a ward roll for a wound or mortal wound that would be allocated to Myari Lightcaller within 3" of this unit, roll a dice. On a 2+, that wound or mortal wound must be allocated to this unit instead of Myari Lightcaller and cannot be negated.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Purifying Strikes`,
        desc: `If the unmodified hit roll for an attack made by this unit is 6, that attack causes 1 mortal wound to the target and the attack sequence ends (do not make a wound or save roll).`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  }, */
  'ROR: Fjori`s Flamebearers': {
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
        Effect: You can re-roll charge rolls for the targets for the rest of the turn`,
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
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')