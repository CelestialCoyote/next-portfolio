import { Decimal128, Double } from 'mongodb';
import mongoose from 'mongoose'


const StarSchema = new mongoose.Schema({
  hr: {
	/* The HR catalog number of this star. */
    type: Number,
  },
  hip: {
    /* TThe HIP catalog number of this star. */
    type: Number,
  },
  name: {
    /* The identifying name of the star. */
    type: String,
  },
  iauNameApproved: {
    /* Boolean if name is IAU approved. */
    type: Boolean,
  },
  bayer: {
    /* Star's Bayer Designation, if present. */
    type: String,
  },
  flamsteed: {
    /* Star's Flamsteed Designation, if present. */
    type: Number,
  },
  bayerFlamsteed: {
    /* Star's Bayer/ Flamsteed Designation, if present. */
    type: String,
  },
  constellation: {
    /* Full constellation name to which star belongs. */
    type: String,
  },
  constellationAbbreviation: {
    /* Three letter constellation abbreviation to which star belongs. */
    type: String,
  },
  vmag: {
    /* Visual magnitude of star. */
    type: Decimal128,
  },
  hd: {
	/* The HD catalog number of this star. */
    type: Number,
  },
  sao: {
	/* The SAO catalog number of this star. */
    type: Number,
  },
  ra2000hms: {
	/* The Right Ascension of this star. */
    type: String,
  },
  dec2000dms: {
	/* The Declination of this star. */
    type: String,
  },
  glon: {
	/* The Galactic Longitude of this star. */
    type: Decimal128,
  },
  glat: {
	/* The Galactic Latitude of this star. */
    type: Decimal128,
  },
  spType: {
	/* The Spectral Type of this star. */
    type: String,
  },
})


export default mongoose.models.Star || mongoose.model('Star', StarSchema);
