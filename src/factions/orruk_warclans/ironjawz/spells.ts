import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { COMBAT_PHASE, DURING_GAME, HERO_PHASE, MOVEMENT_PHASE, SHOOTING_PHASE } from 'types/phases'

const IronjawzSpells = {
  'Lore of the Weird': {
    effects: [
      {
        name: `Bash 'Em Ladz!: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Ironjawz Wizard to cast this spell, pick a visible friendly Ironjawz unit wholly within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: The targets melee weapons have Crit (2 Hits) for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mighty 'Eadbutt: Casting value of 6`,
        desc: `Declare: Pick a friendly Ironjawz Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Inflict D3 mortal damage on the target. If the target is a Wizard, inflict 3 mortal damage on the target instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `Da Great Big Green Hand of Gork: Casting value of 7`,
        desc: `Declare: Pick a friendly Ironjawz Wizard to cast this spell, pick a visible friendly unit wholly within 12" of them and not in combat to be the target, then make a casting roll of 2D6. 
        Effect: Remove the target from the battlefield and set it up again wholly within 24" of the caster and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Big Waaagh! (AoR)': {
    effects: [
      {
        name: `Two Headz As One: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Big Waaagh! Wizard to cast this spell, pick a visible friendly Big Waaagh! Infantry unit wholly within 12" of them to be the target, then make a casting roll of 2D6.
          Effect: If the target is an Ironjawz unit, until the start of your next turn, add 3 to the target's control score while it is wholly within 12" of any friendly Kruleboyz units.
          If the target is a Kruleboyz unit, until the start of your next turn, add 2" to the terget's Move characteristic while it is wholly within 12" of any friendly Ironjawz units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Foot of Gork: Casting value of 7`,
        desc: `Declare: If there is not a friendly Foot of Gork on the battlefield, pick a friendly Big Waaagh! Wizard to cast this spell, then make a casting roll of 2D6. 
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
    ],
  },
  'Zoggroks Ironmongerz (AoR)': {
    effects: [
      {
        name: `The Green God's Hammer: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Zoggrok's Ironmongerz Wizard to cast this spell, pick a visible friendly Zoggrok's Ironmongerz Infantry unit wholly within 12" of them to be the target, then make a casting roll of 2D6.
          Effect: Until the start of your next turn, add 1 to the number of dice rolled when making charge rolls for the target, to a maximum of 3.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Gork-Roara: Casting value of 5`,
        desc: `Declare: If there is not a friendly Gork-Roara on the battlefield, pick a friendly Zoggrok's Ironmongerz Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Gork-Roara wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Gork-Roara - Bellowing Waaagh!-Cries`,
        desc: `Declare: Pick a friendly Ironjawz or Kruleboyz Wizard or Priest within 3" of this Manifestation to be the target.
        Effect: Pick either 1 or 2 to add to casting rolls or chanting rolls for the target until the start of your next turn. Then, roll a number of dice equal to the number picked. For each 1-2, allocate 1 damage point to the target (ward rolls cannot be made for those damage points). For each 5+, until the start of your next turn, add 1 to charge rolls for friendly Kruleboyz or Ironjawz units while they are wholly within 12" of this Manifestation. Friendly units can be affected by this ability multiple times and the effects are cumulative.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /* 'Brain-bursta': {
    effects: [
      {
        name: `Brain-bursta`,
        desc: `Casting value of 5. Pick 1 enemy unit within 16" of the caster and visible to them, and roll 2D6. If the roll is greater than that unit's Bravery characteristic, that unit suffers D6 mortal wounds; if not, that unit suffers D3 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  "Mighty 'Eadbutt": {
    effects: [
      {
        name: `Mighty 'Eadbutt`,
        desc: `Casting value of 5 and range of 16". Pick 1 enemy HERO within range and visible to the caster. That HERO suffers 1 mortal wound. If that HERO is a WIZARD, they suffer D3 mortal wounds instead of 1.`,
        when: [HERO_PHASE],
      },
    ],
  },
  "Da Blazin' Eyes": {
    effects: [
      {
        name: `Da Blazin' Eyes`,
        desc: `Casting value of 6. Pick 1 point on the battlefeld within 4D6" of the caster and visible to them. Draw an imaginary straight line 1mm wide between that point and the closest part of the caster's base. Roll a D6 for each enemy model passed across by this line. On a 4+ that model's unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Foot of Gork': {
    effects: [
      {
        name: `Foot of Gork`,
        desc: `Casting value of 10 and range of 18". Pick 1 enemy unit within range and visible to the caster. That unit suffers D6 mortal wounds. Then, roll a dice. On a 1-3, the sequence stops. On a 4+, the unit suffers D6 mortal wounds. Keep rolling dice in this way until the sequence stops or the target unit is destroyed.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Da Great Big Green Hand of Gork': {
    effects: [
      {
        name: `Da Great Big Green Hand of Gork`,
        desc: `Casting value of 7 and range of 12". Pick 1 friendly ORRUK unit wholly within range, visible to the caster and more than 3" from all enemy units. Remove that unit from the battlefield and set it up again anywhere on the battlefield more than 9" from any enemy units. It cannot move in the following movement phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  "Bash 'Em, Ladz!": {
    effects: [
      {
        name: `Bash 'Em, Ladz!`,
        desc: `Bash 'Em, Ladz! is a spell that has a casting value of 8. If successfully cast, until your next hero phase, you can add 1 to wound rolls for attacks made by friendly IRONJAWZ units that are wholly within 16" of the caster.`,
        when: [HERO_PHASE, COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  },
  'Wrath of Gork': {
    effects: [
      {
        name: `Wrath of Gork`,
        desc: `Casting value of 8. Pick en enemy unit within 16" and visible. roll 2 dice for each IRONJAWZ unit with 2+ models wholly within 16", for each 2+ inflict 1 mortal wound to the chosen enemy unit.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(IronjawzSpells, 'spell')
