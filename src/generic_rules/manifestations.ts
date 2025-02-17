// Manifestations go here
import { TEntry } from 'types/data'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
} from 'types/phases'

const GenericManifestations: TEntry[] = [
  // Core Manifestations
  {
    name: `Forbidden Power`,
    effects: [
      {
        name: `Summon Shards of Valagharr: Casting value of 6`,
        desc: `Declare: If there is not a friendly Shards of Valagharr endless spell on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Shards of Valagharr endless spell wholly within 18" of the caster and visible to them. A Shards of Valagharr endless spell has 2 parts that must be set up within 9" of each other.`,
        when: [HERO_PHASE],
      },
      {
        name: `Shards of Valagharr - Multiple Parts - Passive`,
        desc: `Effect: When a number of damage points equal to this Manifestations Health characteristic are allocated to it, this Manifestation is destroyed and both its parts are removed from play.`,
        when: [DURING_GAME],
      },
      {
        name: `Shards of Valagharr - Phantasmal Translocation`,
        desc: `Effect: Pick a part of this Manifestation, remove it from the battlefield and set it up again on the battlefield wholly within 9" of the other part.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Shards of Valagharr - Ensnaring Soul-Drain - Passive`,
        desc: `Effect: Each time an enemy unit uses a Move ability while it is within 6" of any parts of this Manifestation, the effects of the Fly ability do not apply to that unit. Enemy units cannot be set up within 6" of either part of this Manifestation.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Summon Lauchon the Soulseeker: Casting value of 7`,
        desc: `Declare: If there is not a friendly Lauchon the Soulseeker on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Lauchon the Soulseeker wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Lauchon the Soulseeker - Traverse the Tides of Death`,
        desc: `Declare: Pick a friendly Infantry Wizard Hero within 3" of this Manifestation to be the target. 
        Effect: This Manifestation can move a distance up to its Move characteristic. It can pass through models during that move but it cannot end that move in combat. Then, remove the target from the battlefield and set them up again on the battlefield within 3" of this Manifestation and not in combat. Then, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Summon Horrorghast: Casting value of 6`,
        desc: `Declare: If there is not a friendly Horrorghast on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Horrorghast wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Horrorghast - Harbinger of Horror`,
        desc: `Declare: Pick an enemy unit that was targeted by this Manifestations shooting attacks this phase to be the target. 
        Effect: Roll a dice. If the roll is less than the number of models in the target unit that were slain this phase, the target cannot use commands for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Summon Soulscream Bridge: Casting value of 6`,
        desc: `Declare: If there is not a friendly Soulscream Bridge on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Soulscream Bridge wholly within 18" of the caster and visible to them. A Soulscream Bridge has 2 parts that must be set up within 9" of each other.`,
        when: [HERO_PHASE],
      },
      {
        name: `Soulscream Bridge - Multiple Parts - Passive`,
        desc: `Effect: When a number of damage points equal to this Manifestations Health characteristic are allocated to it, this Manifestation is destroyed and both its parts are removed from play.`,
        when: [DURING_GAME],
      },
      {
        name: `Soulscream Bridge - Deathly Passage`,
        desc: `Declare: Pick a friendly unit wholly within 6" of one part of this Manifestation to be the target. 
        Effect: Remove the target from the battlefield and set it up again on the battlefield wholly within 6" of the other part of this Manifestation and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  {
    name: `Aetherwrought Mercinaries`,
    effects: [
      {
        name: `Summon Chronomantic Cogs: Casting value of 6`,
        desc: `Declare: If there is not a friendly Chronomantic Cogs endless spell on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Chronomantic Cogs endless spell wholly within 12" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Chronomantic Cogs - Mechanisms of Time - Once Per Turn`,
        desc: `Effect: If there are any friendly Wizards within 3" of this Manifestation, pick 1 of the following effects: 
        Increase Time Flow: Until the start of your next turn, you can reroll charge rolls for friendly units while they are wholly within 12" of this Manifestation. 
        Decrease Time Flow: Until the start of your next turn, subtract 1 from hit rolls for attacks that target friendly Wizards while they are wholly within 12" of this Manifestation.`,
        when: [HERO_PHASE, SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Summon Quicksilver Swords: Casting value of 6`,
        desc: `Declare: If there is not a friendly Quicksilver Swords endless spell on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Quicksilver Swords endless spell wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Quicksilver Swords - Dancing Blades - Passive`,
        desc: `Effect: Ward rolls cannot be made for damage points inflicted by this Manifestations attacks.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Summon Aethervoid Pendulum: Casting value of 6`,
        desc: `Declare: If there is not a friendly Aethervoid Pendulum on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up an Aethervoid Pendulum wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Aethervoid Pendulum - The Pendulum Swings - Passive`,
        desc: `Effect: This Manifestation cannot use Charge or Fight abilities. In addition, when this Manifestation moves, it must move in a straight line either in the direction in which the tip of the pendulum blade is pointing or in the opposite direction to the direction in which the tip of the pendulum blade is pointing.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Aethervoid Pendulum - Scything Blade`,
        desc: `Effect: This Manifestation can move a distance up to its Move characteristic in one direction (See The Pendulum Swings). It can pass through models during that move and can end that move in combat. Then, pick up to 3 enemy units that this Manifestation passed across during that move or that are within 1/2" of it to be the targets. Roll a D6 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  {
    name: `Primal Energy`,
    effects: [
      {
        name: `Summon Burning Head: Casting value of 5`,
        desc: `Declare: If there is not a friendly The Burning Head on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up The Burning Head wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Burning Head - Burning Up - Passive`,
        desc: `Effect: Each time this Manifestation uses a Shoot ability, after that ability has been resolved, allocate 1 damage point to this Manifestation (ward rolls cannot be made for that damage point).`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Summon Emerald Lifeswarm: Casting value of 6`,
        desc: `Declare: If there is not a friendly Emerald Lifeswarm on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up an Emerald Lifeswarm wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Emerald Lifeswarm - Restored Vigour`,
        desc: `Effect: Heal (3) this Manifestation.`,
        when: [END_OF_TURN],
      },
      {
        name: `Emerald Lifeswarm - Bounteous Healing`,
        desc: `Declare: Pick a friendly unit within 3" of this Manifestation to be the target. 
        Effect: Heal (3) the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Summon Ravenak's Gnashing Jaws: Casting value of 7`,
        desc: `Declare: If there is not a friendly Ravenaks Gnashing Jaws endless spell on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Ravenaks Gnashing Jaws endless spell wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Ravenak's Gnashing Jaws - Ravening Hunger`,
        desc: `Declare: If this Manifestation charged this turn, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll 10 dice. For each 5+, inflict 1 mortal damage on the target.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  {
    name: `Twilit Sorceries`,
    effects: [
      {
        name: `Summon Umbral Spellportal: Casting value of 7`,
        desc: `Declare: If there is not a friendly Umbral Spellportal on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up an Umbral Spellportal wholly within 18" of the caster and visible to them. An Umbral Spellportal has 2 parts that must be set up within 9" of each other.`,
        when: [HERO_PHASE],
      },
      {
        name: `Umbral Spellportal - Multiple Parts - Passive`,
        desc: `Effect: When a number of damage points equal to this Manifestations Health characteristic are allocated to it, this Manifestation is destroyed and both its parts are removed from play.`,
        when: [DURING_GAME],
      },
      {
        name: `Umbral Spellportal - Arcane Passage`,
        desc: `Declare: Pick a friendly Wizard within 3" of this Manifestation to be the target. 
        Effect: The next time the target uses a non-Summon Spell ability this phase, add 1 to the casting value of that spell. When picking targets for that spell, you can measure range and visibility from either part of this Manifestation instead of from the caster, and your opponent can measure range and visibility to either part of this Manifestation instead of to the caster for the purposes of the Unbind ability.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Geminids of Uhl-Gysh: Casting value of 7`,
        desc: `Declare: If there is not a friendly Geminids of UhlGysh endless spell on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Geminids of Uhl-Gysh endless spell wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Geminids of Uhl-Gysh - Multiple Parts - Passive`,
        desc: `Effect: When a number of damage points equal to this Manifestations Health characteristic are allocated to it, this Manifestation is destroyed and both its parts are removed from play. 
        Each time this Manifestation moves, both its parts must end within 9" of each other. 
        Each part of this Manifestation is armed with Tendrils of Light and Shadow.`,
        when: [HERO_PHASE, MOVEMENT_PHASE],
      },
      {
        name: `Geminids of Uhl-Gysh - Tendrils of Shadow and Light - Passive`,
        desc: `Effect: Enemy units cannot use commands while they are within 3" of either part of this Manifestation.`,
        when: [DURING_GAME],
      },
      {
        name: `Summon Primsmatic Palisade: Casting value of 7`,
        desc: `Declare: If there is not a friendly Prismatic Palisade on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Prismatic Palisade wholly within 18" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Primsmatic Palisade - Blinding Light - Passive`,
        desc: `Effect: This Manifestation cannot be targeted by shooting attacks. In addition, a unit cannot be targeted by shooting attacks if it is impossible to draw a straight line from a model in the attacking unit to a model in the target unit without that line passing across this Manifestation.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  {
    name: `Morbid Conjuration`,
    effects: [
      {
        name: `Summon Purple Sun of Shyish: Casting value of 8`,
        desc: `Declare: If there is not a friendly Purple Sun of Shyish on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Purple Sun of Shyish wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Purple Sun of Shyish - End Given Form`,
        desc: `Effect: This Manifestation can move a distance up to its Move characteristic. It can pass through models during that move but it cannot end that move in combat. Then, pick up to 3 enemy units that this Manifestation passed across during that move to be the targets. Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Purple Sun of Shyish - Pull of the Nadir - Passive`,
        desc: `Effect: Subtract 1 from save rolls for enemy units while they are within 3" of this Manifestation.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Summon Suffocating Gravetide: Casting value of 8`,
        desc: `Declare: If there is not a friendly Suffocating Gravetide on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Suffocating Gravetide wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Suffocating Gravetide - Pulled to the Grave`,
        desc: `Effect: This Manifestation can move a distance up to its Move characteristic. It can pass through models during that move but it cannot end that move in combat. Then, you can pick an enemy unit that this Manifestation passed across during that move to be the target. Roll a dice for each model in the target unit. For each 5+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Summon Malevolent Maelstrom: Casting value of 6`,
        desc: `Declare: If there is not a friendly Malevolent Maelstrom on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Malevolent Maelstrom wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Malevolent Maelstrom - Necrotic Vortex - Passive`,
        desc: `Effect: Give this Manifestation 1 maelstrom point: Each time this Manifestation is set up. Each time a unit successfully casts a spell while it is within 12" of this Manifestation. Each time a model is slain within 12" of this Manifestation. This Manifestation can have a maximum of 6 maelstrom points at once.`,
        when: [DURING_GAME],
      },
      {
        name: `Malevolent Maelstrom - Morbid Detonation`,
        desc: `Declare: You must, and can only, use this ability if this unit has 6 maelstrom points. Pick each unit (friendly and enemy) within 9" of it to be the targets.
        Effect: Roll a dice for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll. Then, this Manifestation is destroyed.`,
        when: [END_OF_TURN],
      },
      {
        name: `Summon Soulsnare Shackles: Casting value of 6`,
        desc: `Declare: If there is not a friendly Soulsnare Shackles endless spell on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Soulsnare Shackles endless spell wholly within 18" of the caster and visible to them. A Soulsnare Shackles endless spell has 3 parts that must each be set up within 3" of at least 1 other part.`,
        when: [HERO_PHASE],
      },
      {
        name: `Soulsnare Shackles - Multiple Parts - Passive`,
        desc: `Effect: When a number of damage points equal to this Manifestations Health characteristic are allocated to it, this Manifestation is destroyed and all its parts are removed from play.`,
        when: [DURING_GAME],
      },
      {
        name: `Soulsnare Shackles - Bound for the Great Oubliette`,
        desc: `Declare: For each part of this Manifestation, you can pick an enemy unit within 3" of that part to be the targets. You cannot pick the same unit to be the target of this ability more than once per turn. 
        Effect: Roll a D3 for each target. On a 2+: Inflict an amount of mortal damage on the target equal to the roll. 
        Subtract a number of inches equal to the roll from the targets Move characteristic for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Krondspine Incarnate of Ghur`,
    effects: [
      {
        name: `Summon Krondspine Incarnate of Ghur: Casting value of 8`,
        desc: `Declare: If there is not a friendly Krondspine Incarnate of Ghur on the battlefield, pick a friendly Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Krondspine Incarnate of Ghur wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Krondspine Incarnate of Ghur - Devourer of Magics`,
        desc: `Effect: If this Manifestation destroyed any enemy Manifestations this turn, Heal (6) this Manifestation.`,
        when: [END_OF_TURN],
      },
      {
        name: `Krondspine Incarnate of Ghur - Wild Form - Passive`,
        desc: `Effect: Each time this Manifestation is targeted by the Banish Manifestation ability, if it would be banished, it is not banished. Instead, allocate 6 damage points to it (ward rolls cannot be made for those damage points).`,
        when: [HERO_PHASE],
      },
      {
        name: `Krondspine Incarnate of Ghur - Arcane Predator - Passive`,
        desc: `Effect: You can add 1 to the number of dice rolled when making charge rolls for this Manifestation, to a maximum of 3, while it is within 18" of any enemy Manifestations, but if you do so, it must end the charge move within 1/2" of an enemy Manifestation.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  {
    name: `Daughters of Khaine`,
    effects: [
      {
        name: `Summon Bladewind: Casting value of 6`,
        desc: `Declare: If there is not a friendly Bladewind on the battlefield, pick a friendly Daughters of Khaine Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Bladewind wholly within 9" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Bladewind - Unnatural Edge`,
        desc: `Declare: If this Manifestation charged this turn, pick an enemy unit in combat with it to be the target. 
        Effect: Roll a dice. On a 3+, ignore positive modifiers to save rolls for the target for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Summon Bloodwrack Viper: Casting value of 6`,
        desc: `Declare: If there is not a friendly Bloodwrack Viper on the battlefield, pick a friendly Daughters of Khaine Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Bloodwrack Viper wholly within 9" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Bloodwrack Viper - Crushing Coils - Once Per Turn`,
        desc: `Declare: Pick an enemy Infantry Hero in combat with this Manifestation to be the target. 
        Effect: Roll a dice. On a 3+, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Summon Heart of Fury: Chant value of 5`,
        desc: `Declare: If there is not a friendly Heart of Fury on the battlefield, pick a friendly Daughters of Khaine Priest to chant this prayer, then make a chanting roll of D6. 
        Effect: Set up a Heart of Fury wholly within 9" of the chanter and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Heart of Fury - Locus of the Murder God - Passive`,
        desc: `Effect: Subtract 1 from wound rolls for combat attacks that target friendly Daughters of Khaine Infantry units while they are wholly within 12" of this Manifestation.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Fyreslayers`,
    effects: [
      {
        name: `Summon Runic Fyrewall: Chant value of 4`,
        desc: `Declare: If there is not a friendly Runic Fyrewall on the battlefield, pick a friendly Fyreslayers Priest to chant this prayer, then make a chanting roll of D6. 
        Effect: Set up a Runic Fyrewall wholly within 12" of the chanter and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Runic Fyrewall - Roaring Rune-Fire - Enemy Movement Phase`,
        desc: `Declare: Pick up to 3 enemy units within 6" of this Manifestation to be the targets. 
        Effect: Roll a D3 for each target. On a 2+: Inflict an amount of mortal damage on the target equal to the roll. Subtract 3 from the targets control score for the rest of the turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Summon Molten Infernoth: Chant value of 6`,
        desc: `Declare: If there is not a friendly Molten Infernoth on the battlefield, pick a friendly Fyreslayers Priest to chant this prayer, then make a chanting roll of D6. 
        Effect: Set up a Molten Infernoth wholly within 12" of the chanter, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Molten Infernoth - Flamescarred`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by this Manifestations attacks to be the target. 
        Effect: Subtract 1 from wound rolls for the targets combat attacks until the end of your next turn.`,
        when: [END_OF_TURN],
      },
      {
        name: `Summon Zharrgron Flame-Spitter: Chant value of 4`,
        desc: `Declare: If there is not a friendly Zharrgron Flame-spitter on the battlefield, pick a friendly Fyreslayers Priest to chant this prayer, then make a chanting roll of D6. 
        Effect: Set up a Zharrgron Flame-spitter wholly within 12" of the chanter and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Zharrgron Flame-Spitter - Magma Blast - Passive`,
        desc: `Effect: Add 1 to hit rolls for this Manifestations shooting attacks if the target unit has 10 or more models. Add 1 to hit rolls and wound rolls instead if the target unit has 15 or more models.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  {
    name: `Lumineth Realmlords`,
    effects: [
      {
        name: `Summon Sanctum of Amyntok: Casting value of 4`,
        desc: `Declare: If there is not a friendly Sanctum of Amyntok on the battlefield, pick a friendly Lumineth Realm-lords Wizard to cast this spell, pick a visible friendly Lumineth Realm-lords Infantry Hero wholly within 12" of them and more than 3" from all other units and terrain features to be the target, then make a casting roll of 2D6. 
        Effect: Set up a Sanctum of Amyntok within the targets combat range, visible to the caster and not in combat. A Sanctum of Amyntok has 3 parts that must be set up touching each other so that they form a ring with the target inside`,
        when: [HERO_PHASE],
      },
      {
        name: `Sanctum of Amyntok - Sigil of Yngra - Passive`,
        desc: `Effect: While the unit that was picked to be the target of the Summon Sanctum of Amyntok ability is inside the ring formed by this Manifestation: 
        That unit has Ward (4+). 
        If that unit is a Wizard, add 1 to that units power level. 
        Instead of measuring range or visibility to that unit, measure to this Manifestation instead. 
        This Manifestation cannot be picked to be the target of abilities other than Banish abilities. 
        If that unit uses a Move ability, makes a pile-in move or is removed from the battlefield, this Manifestation is removed from play.`,
        when: [DURING_GAME],
      },
      {
        name: `Summon Hyshian Twinstones: Casting value of 5`,
        desc: `Declare: If there is not a friendly Hyshian Twinstones endless spell on the battlefield, pick a friendly Lumineth Realm-lords Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Hyshian Twinstones endless spell wholly within 6" of the caster.`,
        when: [HERO_PHASE],
      },
      {
        name: `Hyshian Twinstones - Reservoir of Power - Passive`,
        desc: `Effect: Add 1 to casting rolls for friendly Lumineth Realm-lords units while they are wholly within 6" of this Manifestation.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Rune of Petrification: Casting value of 7`,
        desc: `Declare: If there is not a friendly Rune of Petrication on the battlefield, pick a friendly Lumineth Realm-lords Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Rune of Petrication wholly within 18" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Rune of Petrification - Turn to Stone`,
        desc: `Declare: Pick each enemy unit within 6" of this Manifestation to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll. If a target has 3 mortal damage inflicted on it by this ability, it has Strike-last for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Hedonites of Slaanesh`,
    effects: [
      {
        name: `Summon Mesmerising Mirror: Casting value of 6`,
        desc: `Declare: If there is not a friendly Mesmerising Mirror on the battlefield, pick a friendly Hedonites of Slaanesh Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Mesmerising Mirror wholly within 12" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mesmerising Mirror - Irresistible Lure - Reaction: Opponent declared a Move ability for a unit wholly within 12" of this Manifestation`,
        desc: `Effect: If that enemy unit does not end the move closer to this Manifestation than it was at the start of the move, inflict D3 mortal damage on it aer the Move ability has been resolved.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Mesmerising Mirror - Gaze Not Into It's Depths`,
        desc: `Declare: Pick an enemy unit within 6" of this Manifestation to be the target. 
        Effect: Inflict D3 mortal damage on the target. Then, add 1 to hit rolls for the targets attacks for the rest of the turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Summon Wheels of Excruciation: Casting value of 6`,
        desc: `Declare: If there is not a friendly Wheels of Excruciation endless spell on the battlefield, pick a friendly Hedonites of Slaanesh Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Wheels of Excruciation endless spell wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wheels of Excruciation - Exquisite Agony`,
        desc: `Declare: Pick up to 3 enemy units that this Manifestation passed across this turn to be the targets. 
        Effect: Roll 6 dice for each target. For each roll that is less than the targets Save characteristic, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Summon Dreadful Visage: Casting value of 7`,
        desc: `Declare: If there is not a friendly Dreadful Visage on the battlefield, pick a friendly Hedonites of Slaanesh Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Dreadful Visage wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Dreadful Visage - Flensing Tongues`,
        desc: `Declare: Pick an enemy unit in combat with this Manifestation to be the target. 
        Effect: Roll 6 dice. For each 4+, inflict 1 mortal damage on the target. If any models are slain by this ability, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Stormcast Eternals`,
    effects: [
      {
        name: `Summon Dais Arcanum: Casting value of 6`,
        desc: `Declare: If there is not a friendly Dais Arcanum on the battlefield, pick a friendly Stormcast Eternals Wizard to cast this spell, pick a friendly Stormcast Eternals Infantry Hero that does not have Fly and is wholly within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: Set up a Dais Arcanum within 1/2" of the target, visible to the caster and not in combat. Then, remove the target from the battlefield and place it on the platform of that Dais Arcanum.`,
        when: [HERO_PHASE],
      },
      {
        name: `Dais Arcanum - Arcane Enhancement - Passive`,
        desc: `Effect: While the unit that was picked to be the target of the Summon Dais Arcanum ability is on the platform of this Manifestation: 
        That unit has Ward (5+) and Fly. 
        If that unit is a Wizard, add 1 to that units power level. 
        That unit cannot use Move abilities and remains on this Manifestation each time it moves. 
        Instead of measuring range or visibility to that unit, measure to this Manifestation instead.
        If that unit is picked to make a pile-in move, move this Manifestation instead. 
        This Manifestation cannot be picked to be the target of abilities other than Banish abilities. 
        If this Manifestation is banished, before removing it from the battlefield, set up the unit on its platform on the battlefield within 3" of it. That unit can only be set up in combat with units it was already in combat with when this Manifestation was banished. If it is not possible to set up that unit, it is destroyed. 
        If the unit on the platform is removed from the battlefield, immediately remove this Manifestation from play.`,
        when: [DURING_GAME],
      },
      {
        name: `Summon Celestian Vortex: Casting value of 6`,
        desc: `Declare: If there is not a friendly Celestian Vortex on the battlefield, pick a friendly Stormcast Eternals Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Celestian Vortex wholly within 18" of the caster and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Celestian Vortex - Tornado of Magic - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for shooting attacks made by enemy units while they are within 12" of this Manifestation.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Summon Everblaze Comet: Casting value of 8`,
        desc: `Declare: If there is not a friendly Everblaze Comet on the battlefield, pick a friendly Stormcast Eternals Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up an Everblaze Comet wholly within 18" of the caster.`,
        when: [HERO_PHASE],
      },
      {
        name: `Everblaze Comet - Burning Vengeance`,
        desc: `Declare: If this Manifestation was summoned this phase, pick any number of enemy units within 6" of it to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Everblaze Comet - Arcane Disruption - Passive`,
        desc: `Effect: Subtract 1 from casting rolls for enemy Wizards while they are within 12" of this Manifestation.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Sylvaneth`,
    effects: [
      {
        name: `Summon Spiteswarm Hive: Casting value of 7`,
        desc: `Declare: If there is not a friendly Spiteswarm Hive on the battlefield, pick a friendly Sylvaneth Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Spiteswarm Hive wholly within 9" of the caster, visible to them and more than 3" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Spiteswarm Hive - The Hive Nourishes`,
        desc: `Declare: Pick a visible friendly Sylvaneth unit within 3" of this Manifestation to be the target. 
        Effect: Roll a dice. On a 2+, pick 1 of the following effects to apply to the target for the rest of the turn: 
        Vital Venoms: Add 1 to run rolls and charge rolls for the target. 
        Shielding Swarm: The target has Ward (6+).`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Gladewyrm: Casting value of 7`,
        desc: `Declare: If there is not a friendly Gladewyrm on the battlefield, pick a friendly Sylvaneth Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Gladewyrm wholly within 9" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Gladewyrm - Burrow Below`,
        desc: `Effect: If this Manifestation is not in combat, remove it from the battlefield and set it up again on the battlefield more than 9" from all enemy non-Wizard units and more than 3" from all enemy Wizards.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Gladewyrm - Feed on Eldritch Energy`,
        desc: `Declare: Pick an enemy Wizard in combat with this Manifestation to be the target. 
        Effect: Subtract 1 from casting rolls, unbinding rolls and banishment rolls for the target until the end of your next turn.`,
        when: [END_OF_TURN],
      },
      {
        name: `Summon Vengeful Skullroot: Casting value of 7`,
        desc: `Declare: If there is not a friendly Vengeful Skullroot on the battlefield, pick a friendly Sylvaneth Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Vengeful Skullroot wholly within 9" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Vengeful Skullroot - Vengeful Terrors`,
        desc: `Declare: Pick an enemy unit within 3" of this Manifestation to be the target. 
        Effect: For the rest of the turn, Subtract an amount from the targets control score equal to the number of friendly units that have been destroyed this battle (not including Manifestations or Faction Terrain).`,
        when: [END_OF_TURN],
      },
      {
        name: `Vengeful Skullroot - Creeping Willow - Passive`,
        desc: `Effect: This Manifestation counts as an Awakened Wyldwood for the purposes of the 'Endless Growth', 'Walk the Hidden Paths', and 'Strike and Fade' abilities.`,
        when: [DURING_GAME],
      },
    ],
  },
  {
    name: `Blades of Khorne`,
    effects: [
      {
        name: `Summon Bleeding Icon: Chant value of 4`,
        desc: `Declare: If there is not a friendly Bleeding Icon on the battlefield, pick a friendly Blades of Khorne Priest to chant this prayer, then make a chanting roll of D6. 
        Effect: Set up a Bleeding Icon wholly within 12" of the chanter and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Bleeding Icon - Sigil of Doom - Reaction: Opponent declared a command for a unit within 8" of this Manifestation`,
        desc: `Effect: Roll 2D6. On an 8+, that command has no effect, it still counts as having been used and the command points spent to use it are still lost.`,
        when: [DURING_GAME],
      },
      {
        name: `Summon Wrath-Axe: Chant value of 4`,
        desc: `Declare: If there is not a friendly Wrath-axe on the battlefield, pick a friendly Blades of Khorne Priest to chant this prayer, then make a chanting roll of D6. 
        Effect: Set up a Wrath-axe wholly within 12" of the chanter, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wrath-Axe - Hatred's Edge`,
        desc: `Declare: Pick up to 3 enemy units that this Manifestation passed across this turn to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Summon Hexgorger Skulls: Chant value of 4`,
        desc: `Declare: If there is not a friendly Hexgorger Skulls invocation on the battlefield, pick a friendly Blades of Khorne Priest to chant this prayer, then make a chanting roll of D6. 
        Effect: Set up a Hexgorger Skulls invocation wholly within 12" of the chanter, visible to them and more than 9" from all enemy units. A Hexgorger Skulls invocation has 2 parts that must be set up within 8" of each other.`,
        when: [HERO_PHASE],
      },
      {
        name: `Hexgorger Skulls - Multiple Parts - Passive`,
        desc: `Effect: When a number of damage points equal to this Manifestations Health characteristic are allocated to it, this Manifestation is destroyed and both its parts are removed from play. 
        Each time this Manifestation moves, both its parts must end within 8" of each other. 
        Each part of this Manifestation is armed with a Stream of Molten Blood.`,
        when: [DURING_GAME],
      },
      {
        name: `Hexgorger Skulls - Hexgorgers - Passive`,
        desc: `Effect: For each part of this Manifestation that is within 8" of a Wizard (friendly or enemy), subtract 1 from casting rolls for that Wizard.`,
        when: [DURING_GAME],
      },
    ],
  },
  {
    name: `Disciples of Tzeentch`,
    effects: [
      {
        name: `Summon Tome of Eyes: Casting value of 5`,
        desc: `Declare: If there is not a friendly Tome of Eyes on the battlefield, pick a friendly Disciples of Tzeentch Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Tome of Eyes wholly within 12" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Tome of Eyes - Transfixed by Countless Eyes - Reaction: You declared a Spell ability for a Wizard within this Manifestations combat range`,
        desc: `Effect: You can add 1 or 2 to the casting roll for that spell. Roll a number of dice equal to the amount added. For each 1-2, allocate 1 damage point to the caster. If the caster is destroyed by this ability, the spell has no effect.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Burning Sigil of Tzeentch: Casting value of 5`,
        desc: `Declare: If there is not a friendly Burning Sigil of Tzeentch on the battlefield, pick a friendly Disciples of Tzeentch Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Burning Sigil of Tzeentch wholly within 12" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Burning SIgil of Tzeentch - Radiant Transmogrification`,
        desc: `Declare: This Manifestation must use this ability in each hero phase. Pick each unit (friendly and enemy) within 9" of this Manifestation to be the targets. 
        Effect: Roll 2 dice, pick either result, then apply the corresponding effect for the rest of the turn. 
        1 No effect. 
        2-3 Add 2" to the move chareacteristic of friendly Disciples of Tzeentch targets and subtract 2" from the  Move characteristic of enemy targets. 
        4 Add 1 to hit rolls for friendly Disciples of Tzeentch targets and subtract 1 from hit rolls for enemy targets. 
        5 Add 1 to wound rolls for friendly Disciples of Tzeentch targets and subtract 1 from wound rolls for enemy targets. 
        6 Add 1 to the Attacks characteristic of melee weapons used by friendly Disciples of Tzeentch targets and inflict D3 mortal damage on each enemy target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Daemonic Simulacrum: Casting value of 7`,
        desc: `Declare: If there is not a friendly Daemonic Simulacrum on the battlefield, pick a friendly Disciples of Tzeentch Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Daemonic Simulacrum wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Daemonic Simulacrum - Manifested Jaws - Passive`,
        desc: `Effect: While this Manifestations attacks target a Wizard, add a number equal to that Wizards power level to the Damage characteristic of this units Snapping Jaws.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Skaven`,
    effects: [
      {
        name: `Summon Warp Lightning Vortex: Casting value of 7`,
        desc: `Declare: If there is not a friendly Warp Lightning Vortex on the battlefield, pick a friendly Skaven Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up the first part of the Warp Lightning Vortex within 18" of the caster and visible to them, then set up the second and third parts exactly 7" from the first part and exactly 7" from each other so that they form a triangle.`,
        when: [HERO_PHASE],
      },
      {
        name: `Warp Lightning Vortex - Multiple Parts - Passive`,
        desc: `Effect: When a number of damage points equal to this Manifestations Health characteristic are allocated to it, this Manifestation is destroyed and all its parts are removed from play.`,
        when: [DURING_GAME],
      },
      {
        name: `Warp Lightning Vortex - Warp Lightning Bolts`,
        desc: `Declare: If this Manifestation was not set up this turn, pick each enemy unit within 6" of this Manifestation to be the targets. 
        Effect: Roll a dice for each target. On a 4+, inflict D3 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Warp Lightning Vortex - Warp Vortex - Passive`,
        desc: `Effect: Subtract 2 from run rolls and charge rolls for enemy units while they are within 6" of this Manifestation. In addition, if an enemy unit passes across this Manifestation, inflict D3 mortal damage on that enemy unit after the Move ability has been resolved.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
      {
        name: `Summon Vermintide: Casting value of 7`,
        desc: `Declare: If there is not a friendly Vermintide on the battlefield, pick a friendly Skaven Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Vermintide wholly within 13" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Vermintide - More-More Rats`,
        desc: `Effect: Heal (D6) this Manifestation.`,
        when: [END_OF_TURN],
      },
      {
        name: `Summon Bell of Doom: Casting value of 7`,
        desc: `Declare: If there is not a friendly Bell of Doom on the battlefield, pick a friendly Skaven Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Bell of Doom wholly within 13" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Bell of Doom - Toll of Doom - Passive`,
        desc: `Effect: Subtract 1 from wound rolls for attacks that target friendly Skaven Infantry units while they are wholly within 13" of this Manifestation.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  },
  {
    name: `Slaves to Darkness`,
    effects: [
      {
        name: `Summon Darkfire Daemonrift: Casting value of 7`,
        desc: `Declare: If there is not a friendly Darkre Daemonrift on the battlefield, pick a friendly Slaves to Darkness Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Darkre Daemonrift wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Darkfire Daemonrift - Fuelled by Sorcery - Passive`,
        desc: `Effect: Each time a spell is successfully cast by a unit within 12" of this Manifestation, give this Manifestation 1 ruinous energy point, to a maximum of 6. 
        Each time this Manifestation uses a Shoot ability, add 1 to the Attacks characteristic of its Darkre Torrent for each ruinous energy point it has. 
        If this Manifestation is removed from play, all of its ruinous energy points are lost.`,
        when: [HERO_PHASE, SHOOTING_PHASE],
      },
      {
        name: `Summon Eightfold Doom-Sigil: Casting value of 7`,
        desc: `Declare: If there is not a friendly Eightfold Doom-Sigil on the battlefield, pick a friendly Slaves to Darkness Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up an Eightfold Doom-Sigil wholly within 12" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Eightfold Doom-Sigil - Empowered by Atrocity - Passive`,
        desc: `Effect: If 2 or more units (friendly or enemy) were destroyed this turn, for the rest of the turn, add 1 to the Attacks characteristic of melee weapons used by friendly Slaves to Darkness units while they are wholly within 12" of this Manifestation.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Summon Realmscourge Rupture: Casting value of 7`,
        desc: `Declare: If there is not a friendly Realmscourge Rupture on the battlefield, pick a friendly Slaves to Darkness Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Realmscourge Rupture wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Realmscourge Rupture - Debilitating Shockwave`,
        desc: `Declare: If this Manifestation charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a dice for each model in the target unit. For each 6, inflict 1 mortal damage on the target. If any models in the target unit are slain by this ability, subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  {
    name: `Flesh-Eater Courts`,
    effects: [
      {
        name: `Summon Chalice of Ushoran: Casting value of 6`,
        desc: `Declare: If there is not a friendly Chalice of Ushoran on the battlefield, pick a friendly Flesh-eater Courts Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Chalice of Ushoran wholly within 12" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Chalice of Ushoran - Fill the Chalice - Passive`,
        desc: `Effect: Each time a model (friendly or enemy) is slain within 12" of this Manifestation, give this Manifestation a blood point, to a maximum of 6.`,
        when: [DURING_GAME],
      },
      {
        name: `Chalice of Ushoran - Overflowing Gore`,
        desc: `Declare: Pick a friendly Flesh-eater Courts unit wholly within 18" of this Manifestation to be the target. 
        Effect: Add the number of blood points this Manifestation has to the targets control score for the rest of the turn. Then, reset this Manifestations blood points to 0.`,
        when: [END_OF_TURN],
      },
      {
        name: `Summon Cadaverous Barricade: Casting value of 5`,
        desc: `Declare: If there is not a friendly Cadaverous Barricade on the battlefield, pick a friendly Flesh-eater Courts Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Cadaverous Barricade wholly within 18" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Cadaverous Barricade - Grasping Hands - Passive`,
        desc: `Effect: Enemy units cannot use Run or Retreat abilities while they are within this Manifestations combat range. 
        In addition, if an enemy unit is picked to use a Move ability while it is within this Manifestations combat range, halve that units Move characteristic (rounding up) for the rest of the turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Summon Corpsemare Stampede: Casting value of 7`,
        desc: `Declare: If there is not a friendly Corpsemare Stampede on the battlefield, pick a friendly Flesh-eater Courts Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Corpsemare Stampede wholly within 9" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Corpsemare Stampede - Trampled Underfoot`,
        desc: `Effect: This Manifestation can move a distance up to its Move characteristic. This Manifestation can pass through models and the combat ranges of enemy units, but it cannot end that move in combat. 
        Then, pick up to 3 enemy units that this Manifestation passed across during that move to be the targets. Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  {
    name: `Nighthaunt`,
    effects: [
      {
        name: `Summon Mortalis Terminexus: Casting value of 6`,
        desc: `Declare: If there is not a friendly Mortalis Terminexus on the battlefield, pick a friendly Nighthaunt Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Mortalis Terminexus wholly within 12" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mortalis Terminexus - Keeper of Mortality`,
        desc: `Declare: Pick a visible friendly Nighthaunt unit within 3" of this Manifestation to be the target. 
        Effect: Roll a dice. On a 2+, pick 1 of the following effects: 
        Add 1 to run rolls and charge rolls for target for the rest of the turn. 
        Heal (3) the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Shyish Reaper: Casting value of 6`,
        desc: `Declare: If there is not a friendly Shyish Reaper on the battlefield, pick a friendly Nighthaunt Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Shyish Reaper wholly within 9" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Shyish Reaper - Soul Reaper - Passive`,
        desc: `Effect: Add 2 to the Attacks characteristic of this Manifestations Almighty Reap if it charged in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Summon Vault of Souls: Casting value of 6`,
        desc: `Declare: If there is not a friendly Vault of Souls on the battlefield, pick a friendly Nighthaunt Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Vault of Souls wholly within 12" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Vault of Souls - Siphon Souls - Passive`,
        desc: `Effect: Each time a model (friendly or enemy) is slain within 12" of this Manifestation, give this Manifestation a soul point, to a maximum of 6.`,
        when: [DURING_GAME],
      },
      {
        name: `Vault of Souls - Soul Eruption`,
        desc: `Declare: If this Manifestation has 6 soul points, pick any number of enemy units within 6" of this unit to be the targets. 
        Effect: Roll a dice for each target. On a 3+, inflict an amount of mortal damage on the target equal to the roll. Then, reset this Manifestations soul points to 0.`,
        when: [END_OF_TURN],
      },
    ],
  },
  {
    name: `Ossiarch Bonereapers`,
    effects: [
      {
        name: `Summon Soulsteal Carrion: Casting value of 6`,
        desc: `Declare: If there is not a friendly Soulstealer Carrion on the battlefield, pick a friendly Ossiarch Bonereapers Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Soulstealer Carrion wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Soulsteal Carrion - Aviarch Sentry - Passive`,
        desc: `Effect: Subtract 5 from the control scores of enemy Infantry units while they are within 6" of this Manifestation.`,
        when: [END_OF_TURN],
      },
      {
        name: `Summon Nightmare Predator: Casting value of 6`,
        desc: `Declare: If there is not a friendly Nightmare Predator on the battlefield, pick a friendly Ossiarch Bonereapers Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Nightmare Predator wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Nightmare Predator - Death Incarnate`,
        desc: `Effect: If this Manifestation was destroyed or banished this turn and the unit that summoned it is on the battlefield, roll a dice. On a 4+, set up this Manifestation again, wholly within 12" of the unit that summoned it and more than 9" from all enemy units.`,
        when: [END_OF_TURN],
      },
      {
        name: `Summon Bone-Tithe Shrieker: Casting value of 6`,
        desc: `Declare: If there is not a friendly Bone-tithe Shrieker on the battlefield, pick a friendly Ossiarch Bonereapers Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Bone-tithe Shrieker wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Bone-Tithe Shrieker - No Escape - Passive`,
        desc: `Effect: Subtract 1 from ward rolls for enemy units while they are within 12" of this Manifestation.`,
        when: [DURING_GAME],
      },
    ],
  },
  {
    name: `Gloomspite Gitz`,
    effects: [
      {
        name: `Summon Scuttletide: Casting value of 6`,
        desc: `Declare: If there is not a friendly Scuttletide on the battlefield, pick a friendly Gloomspite Gitz Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Scuttletide wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Scuttletide - Wall Crawler - Passive`,
        desc: `Effect: This Manifestation can pass across terrain features as if it had Fly.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Scuttletide - Endless Terrors - Passive`,
        desc: `Effect: This unit has Ward (4+) while it is wholly within 12" of any friendly Arachnarok units.`,
        when: [DURING_GAME],
      },
      {
        name: `Summon Mork's Mighty Mushroom: Casting value of 6`,
        desc: `Declare: If there is not a friendly Morks Mighty Mushroom on the battlefield, pick a friendly Gloomspite Gitz Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Morks Mighty Mushroom wholly within 12" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mork's Mighty Mushroom - Mutating Spores`,
        desc: `Declare: Pick up to 3 enemy units within 6" of this Manifestation to be the targets. 
        Effect: For each target, roll a number of dice equal to the number of models in that unit that are within 6" of this Manifestation. For each 5+, inflict 1 mortal damage on the target.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Summon Malevolent Moon: Casting value of 7`,
        desc: `Declare: If there is not a friendly Malevolent Moon on the battlefield, pick a friendly Gloomspite Gitz Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Malevolent Moon wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Malevolent Moon - Lurid Light - Passive`,
        desc: `Effect: While friendly Gloomspite Gitz units are wholly within 12" of this Manifestation they are affected by all four faces of the Bad Moon (Grinnin', Scowlin', Sulkin' and Cacklin').`,
        when: [DURING_GAME],
      },
      {
        name: `Summon Scrapskuttle's Arachnacauldron: Casting value of 7`,
        desc: `Declare: If there is not a friendly Scrapskuttles Arachnacauldron on the battlefield, pick a friendly Gloomspite Gitz Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Scrapskuttles Arachnacauldron wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Scrapskuttle's Arachnacauldron - Blessings of the Cauldron`,
        desc: `Declare: Pick a friendly Gloomspite Gitz Wizard within 1" of this Manifestation to be the target. 
        Effect: Add 1 to the targets power level until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Ironjawz/Kruleboyz`,
    effects: [
      {
        name: `Summon Foot of Gork: Casting value of 7`,
        desc: `Declare: If there is not a friendly Foot of Gork on the battlefield, pick a friendly Ironjawz/Kruleboyz Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Foot of Gork wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Foot of Gork - Multiple Parts - Passive`,
        desc: `Effect: When a number of damage points equal to this Manifestations Health characteristic are allocated to it, this Manifestation is destroyed and all its parts are removed from play.`,
        when: [DURING_GAME],
      },
      {
        name: `Foot of Gork - Wandering Destruction - Once Per Turn`,
        desc: `Declare: Pick a part of this Manifestation to be the target.
        Effect: Remove the target from the battlefield and set it up again on the battlefield wholly within 9" of the other part of this Manifestation.
        Then, roll a D3 for each enemy unit within 3" of the target. On a 2+:
        Inflict an amount of mortal damage on that unit equal to the roll.
        That unit has the Stomped keyword until the start of your next turn.
        Subtract 1 from the number of dice rolled when making charge rolls for Stomped units, to a minimum of 1.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Summon Morkspit Marsh: Casting value of 5`,
        desc: `Declare: If there is not a friendly Morks Morkspit Marsh on the battlefield, pick a friendly Ironjawz/Kruleboyz Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Morkspit Marsh wholly within 18" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Morkspit Marsh - Tricksy Footing - Passive`,
        desc: `Effect: Subtract 3 from the control scores of enemy units while they are within 6" of this Manifestation.`,
        when: [END_OF_TURN],
      },
      {
        name: `Morkspit Marsh - Grasping Gunge - Passive`,
        desc: `Effect: Enemy units cannot use Run abilities while they are within 6" of this Manifestation.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Summon Gork-Roara: Casting value of 5`,
        desc: `Declare: If there is not a friendly Gork-Roara on the battlefield, pick a friendly Ironjawz/Kruleboyz Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Gork-Roara wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Gork-Roara - Bellowing Waaagh!-Cries`,
        desc: `Declare: Pick a friendly Ironjawz or Kruleboyz Wizard or Priest within 3" of this Manifestation to be the target.
        Effect: Pick either 1 or 2 to add to casting rolls or chanting rolls for the target until the start of your next turn. Then, roll a number of dice equal to the number picked. For each 1-2, allocate 1 damage point to the target (ward rolls cannot be made for those damage points). For each 5+, until the start of your next turn, add 1 to charge rolls for friendly Kruleboyz or Ironjawz units while they are wholly within 12" of this Manifestation.`,
        when: [HERO_PHASE],
      },
    ],
  },
]

export default GenericManifestations
