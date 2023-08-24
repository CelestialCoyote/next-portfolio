import { Int32, Decimal128, Double } from 'mongodb';
import mongoose from 'mongoose'


const StarSchema = new mongoose.Schema({
//   hr: {
// 	/* The HR catalog number of this star. */
//     type: Int32,
//   },
//   hip: {
//     /* TThe HIP catalog number of this star. */
//     type: Int32,
//   },
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
//   vmag: {
//     /* Visual magnitude of star. */
//     type: Double,
//   },
})


export default mongoose.models.Star || mongoose.model('Star', StarSchema);
